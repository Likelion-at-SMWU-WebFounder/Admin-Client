import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";
import Board from "../../components/Board";

const DeleteButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #e08888;
  width: 102px;
  height: 56px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.414px;
`;

const PassedApplicantsPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>합격자 선정</S.Title>
          <S.About>합격서류를 분류하여 별도로 관리합니다.</S.About>
          <S.SubTitle>합격자 테이블</S.SubTitle>
          <Board />
          <S.ButtonContainer>
            <S.ButtonSet>
              <DeleteButton>삭제</DeleteButton>
            </S.ButtonSet>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default PassedApplicantsPage;
