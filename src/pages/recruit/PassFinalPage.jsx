import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";
import Board from "../../components/Board";

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const PassFinalPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.Container>
          <S.Title>최종 합격자 선정</S.Title>
          <S.About>최종 합격자를 선정합니다.</S.About>
          <S.SubTitle>최종 합격자 테이블</S.SubTitle>
          <Board buttonContainerType="type2" />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default PassFinalPage;
