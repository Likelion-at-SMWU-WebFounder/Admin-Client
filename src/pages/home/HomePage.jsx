import React from "react";
import styled from "styled-components";

const HomeLayout = styled.div`
  display: flex;
`;

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const HomePage = () => {
<<<<<<< Updated upstream
  return <HomeLayout>홈</HomeLayout>;
=======
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
>>>>>>> Stashed changes
};

export default HomePage;
