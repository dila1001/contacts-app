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
  background-size: contain;
  @media (max-width: 428px) {
    width: 135px;
    height: 220px;
    gap: 31px !important;
    border-radius: 13px;
  }
`;

export const Name = styled.h2`
  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  color: #292929;
  margin-top: 65px;
  @media (max-width: 428px) {
    margin-top: 33px;
    font-size: 14px;
  }
`;

export const Location = styled.h3`
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  color: #292929;
  margin-top: 31px;
  @media (max-width: 428px) {
    margin-top: 7px;
    margin-bottom: 0px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-top: 21px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  @media (max-width: 428px) {
    width: 80px;
    margin-top: 9px;
  }
`;

export const ContactDiv = styled.div`
  margin-top: 22px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  @media (max-width: 428px) {
    margin-top: 11px;
    column-gap: 6px;
  }
`;

export const Mail = styled.img`
  width: 22px;
  @media (max-width: 428px) {
    width: 14px;
  }
`;

export const Phone = styled.img`
  width: 19px;
  @media (max-width: 428px) {
    width: 12px;
  }
`;
