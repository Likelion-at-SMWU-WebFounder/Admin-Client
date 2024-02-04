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
const InterviewTimePage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.Container>
          <S.Title>면접 시간 관리</S.Title>
          <S.About>서류 합격자의 면접 시간을 조정하고, 확정합니다.</S.About>
          <S.SubTitle>서류 합격자 테이블</S.SubTitle>
          <Board buttonContainerType="type3" />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default InterviewTimePage;
