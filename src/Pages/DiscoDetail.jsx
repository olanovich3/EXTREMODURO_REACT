import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../Hooks/UseFetch";
import DiscoInformation from "../ui-components/DiscoInformation";

const DiscoDetailStyled = styled.main``;

const DiscoDetail = () => {
  const { id } = useParams();
  const [discography, loading] = useFetch(
    "https://63eced9031ef61473b2c6fb1.mockapi.io/id"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const discoFiltered = discography.filter((disco) => disco.id === id);

  return (
    <DiscoDetailStyled>
      <DiscoInformation disco={discoFiltered} />
    </DiscoDetailStyled>
  );
};

export default DiscoDetail;
