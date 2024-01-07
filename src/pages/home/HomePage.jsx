import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const HomePage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.HomeContainer>
          <img
            src={`${process.env.PUBLIC_URL}/LogoBlack.svg`}
            width="444px"
            alt="Logo"
          />
        </S.HomeContainer>
      </S.Layout>
    </>
  );
};

export default HomePage;
