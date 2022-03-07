import Grid from "../Grid";
import List from "../List";
import { useEffect, useState, useRef, useCallback } from "react";
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

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [isAscending, setIsAscending] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const maxPageNum = 4;

  useEffect(() => {
    setIsLoading(true);
    const delay = pageNum === 1 ? 0 : 1000;

    new Promise((r) => setTimeout(r, delay)).then(() => {
      fetch(
        `https://randomuser.me/api/?results=9&seed=devoteam&page=${pageNum}`
      )
        .then((res) => res.json())
        .then((data) => {
          setContacts((prev) => {
            return [...new Set([...prev, ...data.results])];
          });
        })
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false));
    });
  }, [pageNum]);

  const sortContacts = () => {
    const contactsArray = [...contacts];
    const sortedContactsArray = contactsArray.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return isAscending ? 1 : -1;
      }
      if (a.name.first > b.name.first) {
        return isAscending ? -1 : 1;
      }
      return 0;
    });
    setContacts(sortedContactsArray);
    setIsAscending((prevVal) => !prevVal);
  };

  const loader = useRef(null);
  const handleObserver = useCallback(
    (entries) => {
      if (isLoading || search.length > 0) return;
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNum((prev) => {
          return Math.min(maxPageNum, prev + 1);
        });
      }
    },
    [isLoading, search]
  );

  const observer = useRef();
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.current.observe(loader.current);
  }, [handleObserver]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const displayContacts = contacts
    .filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`;
      return fullName.toLowerCase().includes(search);
    })
    .map((item, i) => {
      const contactProps = {
        age: item.dob.age,
        firstname: item.name.first,
        lastname: item.name.last,
        location: item.location.city,
        image: item.picture.large,
        email: item.email,
        phone: item.phone,
      };
      return isGrid ? (
        <Grid key={item.dob.date} contact={contactProps} />
      ) : (
        <List key={item.dob.date} contact={contactProps} />
      );
    });

  return (
    <div>
      <SearchDivTop>
        <SearchBar
          value={search}
          handleChange={handleSearch}
          ariaLabel="Search contact"
        />
      </SearchDivTop>
      <ControlsDiv>
        <img
          src={SortIcon}
          width="31px"
          onClick={sortContacts}
          ariaLabel={isAscending ? "Sort descending" : "Sort ascending"}
        />
        <SearchDiv>
          <SearchBar
            value={search}
            handleChange={handleSearch}
            ariaLabel="Search contact"
          />
        </SearchDiv>
        <DisplayToggle
          src={isGrid ? GridIcon : ListIcon}
          width={isGrid ? "24px" : "20px"}
          onClick={() => setIsGrid((prevVal) => !prevVal)}
          ariaLable={isGrid ? "Display in list view" : "Display in grid view"}
        />
      </ControlsDiv>
      <ContactsDiv
        style={{
          flexDirection: isGrid ? "row" : "column",
          gap: isGrid ? "48px 61px" : "18px",
        }}
      >
        {error
          ? error
          : displayContacts.length > 0
          ? displayContacts
          : "No contact found"}
      </ContactsDiv>
      {isLoading && <ContactsDiv>Loading...</ContactsDiv>}
      <div ref={loader} />
    </div>
  );
};

export default Contacts;
