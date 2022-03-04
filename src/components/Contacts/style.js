import styled from "styled-components";

export const ContactsDiv = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: center;
  /* gap: 48px 61px; */
  width: 100%;
  max-width: 752px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 48px;
`;

export const ControlsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 752px;
  margin: 0 auto;
  margin-top: 50px;
  gap: 0px;
`;

export const DisplayToggle = styled.img`
  width: 20px;
  margin-right: 10px;
  margin-left: auto;
`;
