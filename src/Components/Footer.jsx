import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
  & .contact {
    display: flex;
    gap: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ul className="contact">
        <li>
          <strong>Powered by Carlos Olano</strong>
        </li>
        <li>
          <a href="https://github.com/olanovich3?tab=repositories">
            <img
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/github_a3wdej.png"
              alt="github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carlos-olano-gonz%C3%A1lez-338b3b68/">
            <img
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/linkedin_rxabeq.png"
              alt="linkedin"
            />
          </a>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
