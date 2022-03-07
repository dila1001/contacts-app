import styled from "styled-components";
import SearchIcon from "../../assets/search-icon.svg";

export const Input = styled.input`
  width: 100%;
  margin-left: 14px;
  padding-left: 30px;
  border: none;
  width: 283px;
  border-bottom: 2px solid #000000;
  background: transparent url(${SearchIcon}) no-repeat left;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: "Karla";
  font-weight: 700;
  font-size: 1.125rem;
  color: #292929;
  &:focus {
    outline: none;
  }
  @media (max-width: 428px) {
    width: 90%;
    margin-left: 0px;
  }
`;
