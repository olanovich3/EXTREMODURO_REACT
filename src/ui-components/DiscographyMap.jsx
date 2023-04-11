import styled from "styled-components";

const DiscographyMapStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  & .discocard {
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  .discocard img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .discocard h2 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;

const DiscographyMap = ({ disco }) => {
  return (
    <DiscographyMapStyled>
      {disco.map((item) => {
        return (
          <article className="discocard" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </article>
        );
      })}
    </DiscographyMapStyled>
  );
};
export default DiscographyMap;
