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
      backgrounds[props.contact.age % backgrounds.length]
    })`,
  };
  return (
    <Card style={cardBackground}>
      <Name>{`${props.contact.firstname} ${props.contact.lastname}`}</Name>
      <Avatar src={props.contact.image} />
      <Location>{props.contact.location}</Location>
      <ContactDiv>
        <a href={`mailto:${props.contact.email}`}>
          <Mail src={MailIcon} alt="email" />
        </a>
        <a href={`tel:${props.contact.phone}`}>
          <Phone src={PhoneIcon} alt="phonenumber" />
        </a>
      </ContactDiv>
    </Card>
  );
};

export default Grid;
