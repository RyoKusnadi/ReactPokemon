
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

export function Header() {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
    </NavUnlisted>
  );
}