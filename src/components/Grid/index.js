import { Card, Name, Location, Avatar, ContactDiv, Mail, Phone } from "./style";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";
import GreenBackground from "../../assets/card-bg.svg";
import PinkBackground from "../../assets/card-bg2.svg";
import YellowBackground from "../../assets/card-bg3.svg";

const Grid = (props) => {
  const backgrounds = [GreenBackground, PinkBackground, YellowBackground];
  const cardBackground = {
    backgroundImage: `url(${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    })`,
  };
  return (
    <Card style={cardBackground}>
      <Name>{`${props.firstname} ${props.lastname}`}</Name>
      <Avatar src={props.image} />
      <Location>{props.location}</Location>
      <ContactDiv>
        <a href={`mailto:${props.email}`}>
          <Mail src={MailIcon} />
        </a>
        <a href={`tel:${props.phone}`}>
          <Phone src={PhoneIcon} />
        </a>
      </ContactDiv>
    </Card>
  );
};

export default Grid;
