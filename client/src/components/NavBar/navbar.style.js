import styled from "styled-components";
import { Link } from "react-router-dom";

export const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const LI = styled.li`
  float: left;
`;

export const Linki = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  & :hover {
    background-color: #111;
  }
`;
