import styled from "styled-components";

const DiscographyMapStyled = styled.div``;

const DiscographyMap = ({ disco }) => {
  return (
    <DiscographyMapStyled>
      {disco.map((item) => {
        return (
          <article key={item.name}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </article>
        );
      })}
    </DiscographyMapStyled>
  );
};
export default DiscographyMap;
