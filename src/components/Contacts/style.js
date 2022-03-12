import styled from "styled-components";

export const ContactsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 752px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 48px;
  flex-direction: ${(props) => (props.variant ? "row" : "column")};
  gap: ${(props) => (props.variant ? "48px 61px" : "18px")};
  @media (max-width: 428px) {
    gap: 31px !important;
  }
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
  width: ${(props) => (props.variant ? "24px" : "20px")};
  margin-right: 10px;
  margin-left: auto;
`;

export const SearchDiv = styled.div`
  @media (max-width: 428px) {
    display: none;
  }
`;

/* For small screens  */

export const SearchDivTop = styled.div`
  @media (min-width: 428px) {
    display: none;
  }
`;
