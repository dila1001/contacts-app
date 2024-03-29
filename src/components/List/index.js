import {
  ListItem,
  Avatar,
  Name,
  Location,
  NameDiv,
  ContactDiv,
  GroupDiv,
} from "./style";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";
import GreenBackground from "../../assets/list-bg.svg";
import PinkBackground from "../../assets/list-bg2.svg";
import YellowBackground from "../../assets/list-bg3.svg";

function List(props) {
  const backgrounds = [GreenBackground, PinkBackground, YellowBackground];
  const cardBackground = `url(${
    backgrounds[props.contact.age % backgrounds.length]
  })`;

  return (
    <ListItem bg={cardBackground}>
      <Avatar src={props.contact.image} />
      <GroupDiv>
        <NameDiv>
          <Name>{`${props.contact.firstname} ${props.contact.lastname}`}</Name>
          <Location>{props.contact.location}</Location>
        </NameDiv>
        <ContactDiv>
          <a href={`mailto:${props.contact.email}`}>
            <img src={MailIcon} width="22px" />
          </a>
          <a href={`tel:${props.contact.phone}`}>
            <img src={PhoneIcon} width="19px" />
          </a>
        </ContactDiv>
      </GroupDiv>
    </ListItem>
  );
}

export default List;
