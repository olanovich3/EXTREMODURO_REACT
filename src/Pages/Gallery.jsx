import { useState } from "react";
import styled from "styled-components";
import useFetch from "../Hooks/UseFetch";
import DiscographyMap from "../ui-components/DiscographyMap";
import SingerMap from "../ui-components/SingerMap";

const GalleryStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
  gap: 2rem;
  & .gallerybutton {
    display: flex;
    gap: 2rem;
  }

  & .gallerybutton > button {
    background: none;
    color: white;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const Gallery = () => {
  const [disco, setDisco] = useState(true);
  const [discography] = useFetch(
    "https://63eced9031ef61473b2c6fb1.mockapi.io/id"
  );
  const [singer] = useFetch(
    "https://63eced9031ef61473b2c6fb1.mockapi.io/singers"
  );
  console.log(discography);
  return (
    <GalleryStyled>
      <nav className="gallerybutton">
        <button onClick={() => setDisco(true)}>DISCOGRAFÍA</button>
        <button onClick={() => setDisco(false)}>BANDA</button>
        <input></input>
      </nav>
      {disco && <DiscographyMap disco={discography} />}
      {disco === false && <SingerMap singer={singer} />}
    </GalleryStyled>
  );
};

export default Gallery;
