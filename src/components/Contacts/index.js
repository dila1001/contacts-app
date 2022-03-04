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

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setContacts(data.results))
      .catch((err) => console.log(err));
  }, []);

  const displayContacts = contacts.map((item) => {
    return grid ? (
      <Grid
        firstname={item.name.first}
        lastname={item.name.last}
        location={item.location.city}
        image={item.picture.large}
        email={item.email}
        phone={item.phone}
      />
    ) : (
      <List
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
        <img src={SortIcon} width="31px" />
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
