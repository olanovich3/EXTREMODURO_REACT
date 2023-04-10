import styled from "styled-components";

const HomeStyled = styled.main`
  background-image: url("https://res.cloudinary.com/dysog0ybg/image/upload/v1676820548/extremoduro/Que%CC%81-estilo-musical-tocan-Extremoduro_iar3ta.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Home = () => {
  return <HomeStyled></HomeStyled>;
};

export default Home;
