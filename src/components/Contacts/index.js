import { lazy, Suspense } from "react";
/* import Grid from "../Grid";
import List from "../List"; */
import { useEffect, useState } from "react";
import {
  ContactsDiv,
  ControlsDiv,
  DisplayToggle,
  SearchDiv,
  SearchDivTop,
} from "./style";
import SortIcon from "../../assets/sort-icon.svg";
import ListIcon from "../../assets/list-icon.svg";
import GridIcon from "../../assets/grid-icon.svg";
import SearchBar from "../SearchBar";

const Grid = lazy(() => import("../Grid"));
const List = lazy(() => import("../List"));

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [grid, setGrid] = useState(true);
  const [ascending, setAscending] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setContacts(data.results))
      .catch((err) => setError(err.message));
  }, []);

  const sortContacts = () => {
    const contactsArray = [...contacts];
    const sortedContactsArray = contactsArray.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return ascending ? 1 : -1;
      }
      if (a.name.first > b.name.first) {
        return ascending ? -1 : 1;
      }
      return 0;
    });

    // const sortedContactsArray = ascending
    //   ? contactsArray.sort(function (a, b) {
    //       if (a.name.first < b.name.first) {
    //         return 1;
    //       }
    //       if (a.name.first > b.name.first) {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //   : contactsArray.sort(function (a, b) {
    //       if (a.name.first < b.name.first) {
    //         return -1;
    //       }
    //       if (a.name.first > b.name.first) {
    //         return 1;
    //       }
    //       return 0;
    //     });

    setContacts(sortedContactsArray);
    setAscending((prevVal) => !prevVal);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const displayContacts = contacts
    .filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`;
      return fullName.toLowerCase().includes(search);
    })
    .map((item) => {
      const contactProps = {
        age: item.dob.age,
        key: item.dob.date,
        firstname: item.name.first,
        lastname: item.name.last,
        location: item.location.city,
        image: item.picture.large,
        email: item.email,
        phone: item.phone,
      };
      return grid ? (
        <Grid contact={contactProps} />
      ) : (
        <List contact={contactProps} />
      );
    });

  return (
    <div>
      <SearchDivTop>
        <SearchBar value={search} handleChange={handleSearch} />
      </SearchDivTop>
      <ControlsDiv>
        <img src={SortIcon} width="31px" onClick={sortContacts} />
        <SearchDiv>
          <SearchBar value={search} handleChange={handleSearch} />
        </SearchDiv>
        <DisplayToggle
          src={grid ? GridIcon : ListIcon}
          width={grid ? "24px" : "20px"}
          onClick={() => setGrid((prevVal) => !prevVal)}
        />
      </ControlsDiv>
      <Suspense fallback={<ContactsDiv>Loading...</ContactsDiv>}>
        <ContactsDiv
          style={{
            flexDirection: grid ? "row" : "column",
            gap: grid ? "48px 61px" : "18px",
          }}
        >
          {error
            ? error
            : displayContacts.length > 0
            ? displayContacts
            : "No contact found"}
        </ContactsDiv>
      </Suspense>
    </div>
  );
};

export default Contacts;
