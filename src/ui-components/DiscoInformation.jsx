import styled from "styled-components";

const DiscoInformationStyled = styled.div`
  & .discoInfo {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 80vh;
  }

  & .discoimg {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 50%;
    height: 100%;
    padding: 2rem;
  }
  & .img1 {
    height: 50%;
  }
  & .img2 {
    height: 50%;
  }
  & .discosongs {
    padding: 2rem;
    width: 50%;
    height: 100%;
    gap: 1rem;
    display: flex;
    justify-content: center;

    flex-direction: column;
  }
`;

const DiscoInformation = ({ disco }) => {
  return (
    <DiscoInformationStyled>
      {disco.map((item) => {
        return (
          <article className="discoInfo" key={item.name}>
            <nav className="discoimg">
              <img className="img1" src={item.img} alt="" />
              <img className="img2" src={item.imgback} alt="" />
            </nav>
            <nav className="discosongs">
              <h2>{item.name}</h2>
              <h2>
                {item.songs.map((song) => (
                  <h2>- {song}</h2>
                ))}
              </h2>
            </nav>
          </article>
        );
      })}
    </DiscoInformationStyled>
  );
};

export default DiscoInformation;
