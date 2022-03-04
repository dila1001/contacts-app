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
  @media (max-width: 428px) {
    margin-top: 30px;
  }
`;

export const DisplayToggle = styled.img`
  width: 20px;
  margin-right: 10px;
  margin-left: auto;
`;

export const SearchDiv = styled.div`
  @media (max-width: 428px) {
    display: none;
  }
`;

export const SearchDivTop = styled.div`
  @media (min-width: 428px) {
    display: none;
  }
`;
