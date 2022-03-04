import styled from "styled-components";

export const Card = styled.div`
  width: 210px;
  /* max-width: 210px; */
  height: 342px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-position: center;
  background-color: #ffffff;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Name = styled.h2`
  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  color: #292929;
  margin-top: 65px;
`;

export const Location = styled.h3`
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  color: #292929;
  margin-top: 31px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-top: 21px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const ContactDiv = styled.div`
  margin-top: 22px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
