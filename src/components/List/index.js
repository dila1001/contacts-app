import { ListItem, Avatar, Name, Location, NameDiv, ContactDiv } from "./style";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";
import GreenBackground from "../../assets/list-bg.svg";
import PinkBackground from "../../assets/list-bg2.svg";
import YellowBackground from "../../assets/list-bg3.svg";

function List(props) {
  const backgrounds = [GreenBackground, PinkBackground, YellowBackground];
  const cardBackground = {
    backgroundImage: `url(${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    })`,
  };
  return (
    <ListItem style={cardBackground}>
      <Avatar src={props.image} />
      <NameDiv>
        <Name>{`${props.firstname} ${props.lastname}`}</Name>
        <Location>{props.location}</Location>
      </NameDiv>
      <ContactDiv>
        <a href={`mailto:${props.email}`}>
          <img src={MailIcon} width="22px" />
        </a>
        <a href={`tel:${props.phone}`}>
          <img src={PhoneIcon} width="19px" />
        </a>
      </ContactDiv>
    </ListItem>
  );
}

export default List;
