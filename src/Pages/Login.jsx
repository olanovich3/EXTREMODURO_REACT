import { useContext, useRef } from "react";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const LoginContainer = styled.div`
  background: #333333;
  background-image: url("https://res.cloudinary.com/dysog0ybg/image/upload/v1676537014/extremoduro/logo_t6pxwy.png");
  background-position: center;
  background-size: cover;
  animation: fadeIn 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const LoginStyled = styled.main`
  background: #333333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .loginbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: none;
  }
  button {
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: white;
    color: black;
  }
`;

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { logIn } = useContext(UserContext);

  return (
    <LoginStyled>
      <LoginContainer>
        <nav className="loginbox">
          <h2>LOGIN</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            ref={usernameRef}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="enter your password"
            ref={passwordRef}
          />
          <button
            onClick={() =>
              logIn(usernameRef.current.value, passwordRef.current.value)
            }
          >
            LOGIN
          </button>
        </nav>
      </LoginContainer>
    </LoginStyled>
  );
};

export default Login;
