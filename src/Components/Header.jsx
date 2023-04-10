import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background: black;
  color: white;
  display: flex;

  & .headerlist {
    width: 100vw;
    padding: 0rem 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <ul className="headerlist">
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"}>GALLERY</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>LOGIN</NavLink>
        </li>
        <li>
          <button>LOGOUT</button>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
