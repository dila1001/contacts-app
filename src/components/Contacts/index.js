import Grid from "../Grid";
import List from "../List";
import { useEffect, useState } from "react";
import { ContactsDiv, ControlsDiv, DisplayToggle } from "./style";
import SortIcon from "../../assets/sort-icon.svg";
import ListIcon from "../../assets/list-icon.svg";
import GridIcon from "../../assets/grid-icon.svg";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [grid, setGrid] = useState(true);
  const [ascending, setAscending] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setContacts(data.results))
      .catch((err) => console.log(err));
  }, []);

  const sortContacts = () => {
    const contactsArray = [...contacts];
    const sortedContactsArray = ascending
      ? contactsArray.sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return 1;
          }
          if (a.name.first > b.name.first) {
            return -1;
          }
          return 0;
        })
      : contactsArray.sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });

    setContacts(sortedContactsArray);
    setAscending((prevVal) => !prevVal);
  };

  const displayContacts = contacts.map((item) => {
    return grid ? (
      <Grid
        key={item.dob.date}
        firstname={item.name.first}
        lastname={item.name.last}
        location={item.location.city}
        image={item.picture.large}
        email={item.email}
        phone={item.phone}
      />
    ) : (
      <List
        key={item.dob.date}
        firstname={item.name.first}
        lastname={item.name.last}
        location={item.location.city}
        image={item.picture.large}
        email={item.email}
        phone={item.phone}
      />
    );
  });

  return (
    <div>
      <ControlsDiv>
        <img src={SortIcon} width="31px" onClick={sortContacts} />
        <DisplayToggle
          src={grid ? GridIcon : ListIcon}
          width={grid ? "24px" : "20px"}
          onClick={() => setGrid((prevVal) => !prevVal)}
        />
      </ControlsDiv>
      <ContactsDiv
        style={{
          flexDirection: grid ? "row" : "column",
          gap: grid ? "48px 61px" : "18px",
        }}
      >
        {displayContacts}
      </ContactsDiv>
    </div>
  );
};

export default Contacts;
