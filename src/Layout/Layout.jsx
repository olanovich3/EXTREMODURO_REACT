import styled from "styled-components";

const LayoutStyled = styled.main`
  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
  width: 100vw;
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
