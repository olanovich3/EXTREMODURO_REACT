import styled from "styled-components";

const SingerMapStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  & .singercard {
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .singercard img {
    width: 100%;
    height: 50%;
    margin-bottom: 1rem;
  }
  .singercard h2 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;
const SingerMap = ({ singer }) => {
  return (
    <SingerMapStyled>
      {singer.map((item) => {
        return (
          <article className="singercard" key={item.name}>
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
