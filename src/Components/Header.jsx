import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const HeaderStyled = styled.header`
  display: flex;

  & .headerlist {
    width: 100vw;
    padding: 0rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  & .buttonlogout {
    background: none;
    color: white;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <HeaderStyled>
      <ul className="headerlist">
        {user && (
          <li>
            <h1>{user}</h1>
          </li>
        )}
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to={"/gallery"}>GALLERY</NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to={"/login"}>LOGIN</NavLink>
          </li>
        )}
        {user && (
          <li>
            <button className="buttonlogout" onClick={() => logOut()}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </HeaderStyled>
  );
};

export default Header;
