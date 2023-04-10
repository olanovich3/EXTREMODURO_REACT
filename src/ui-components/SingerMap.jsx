import styled from "styled-components";

const SingerMapStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const SingerMap = ({ singer }) => {
  return (
    <SingerMapStyled>
      {singer.map((item) => {
        return (
          <article key={item.name}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <h2>{item.role}</h2>
          </article>
        );
      })}
    </SingerMapStyled>
  );
};

export default SingerMap;
