import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100vw;
  margin-left: 5rem;
  /* margin-left: 5rem; */
  img {
    width: 241px;
  }
`;

const LogoImg = styled.img`
  padding-top: 1rem;
  padding-bottom: 4rem;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <a href="http://localhost:3000/sooklion-admin/">
        <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt="Logo" />
      </a>
      <LogoImg src={`${process.env.PUBLIC_URL}/AdminLogo.svg`} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
