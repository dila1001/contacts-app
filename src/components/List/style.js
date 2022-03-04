import styled from "styled-components";

export const ListItem = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-position: left;
  background-repeat: no-repeat;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3px;
  align-content: center;
  margin-left: 23px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  margin-left: 31px;
`;

export const Name = styled.h2`
  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  color: #292929;
  margin: 0px;
`;

export const Location = styled.h3`
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  color: #292929;
  margin: 0px;
`;

export const ContactDiv = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  margin-right: 33px;
  @media (max-width: 428px) {
    align-self: flex-end;
    margin-bottom: 10px;
  }
`;
