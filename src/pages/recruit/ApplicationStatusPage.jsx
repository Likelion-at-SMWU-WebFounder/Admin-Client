import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";
import Board from "../../components/Board";

const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 70px;
`;

const StateBox = styled.div`
  position: relative;
  width: 239px;
  height: 153px;
  flex-shrink: 0;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.6);
  margin-right: 1.5vw;
`;

const StateItem = styled.div`
  position: absolute;
  left: 15px;
  top: 17px;
  color: #111;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
`;

const StateNum = styled.div`
  position: absolute;
  right: 15px;
  bottom: 17px;
  color: #111;
  text-align: right;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.273px;
`;

const PDFButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #fafafa;
  width: 163px;
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

const ResetButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #f4a6a6;
  width: 197px;
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

const AddButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #8fe088;
  width: 315px;
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

const ApplicationStatusPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>지원 현황 및 지원 서류</S.Title>
          <S.About>
            신규모집 지원현황을 확인하고, 지원 서류를 관리합니다.
          </S.About>
          <S.SubTitle>지원 현황</S.SubTitle>
          <StateContainer>
            <StateBox>
              <StateItem>전체 지원자 수</StateItem>
              <StateNum>133명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>전체 지원자 수</StateItem>
              <StateNum>133명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>전체 지원자 수</StateItem>
              <StateNum>133명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>전체 지원자 수</StateItem>
              <StateNum>133명</StateNum>
            </StateBox>
          </StateContainer>
          <Board />
          <S.ButtonContainer>
            <S.ButtonSet>
              <PDFButton>PDF 추출</PDFButton>
              <ResetButton>지원자 초기화</ResetButton>
              <AddButton>합격자 테이블에 추가 + </AddButton>
            </S.ButtonSet>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default ApplicationStatusPage;
