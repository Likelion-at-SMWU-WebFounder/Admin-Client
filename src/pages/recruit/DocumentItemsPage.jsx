import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const QuestionContainer = styled.div``;

const QuestionDiv = styled.div`
  padding: 10px 10px;
  min-width: 1135px;
  border-radius: 15px;
  border: 1px solid #fff;
  background: rgba(217, 217, 217, 0);
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.263px;
  margin-bottom: 30px;
`;

const Div = styled.div`
  height: 40px;
`;

const SaveButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #8891e0;
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

const questions = [
  {
    id: 1,
    content:
      "공통질문 1번을 작성합니다. 수 튼튼하며, 황금시대를 끓는다. 있으며, 힘차게 긴지라 심장의 못할 사막이다. 없으면 긴지라 가치를 이것이다.",
  },
  {
    id: 2,
    content:
      "공통질문 2번을 작성합니다. 수 튼튼하며, 황금시대를 끓는다. 있으며, 힘차게 긴지라 심장의 못할 사막이다. 없으면 긴지라 가치를 이것이다.",
  },
  {
    id: 3,
    content:
      "공통질문 3번을 작성합니다. 수 튼튼하며, 황금시대를 끓는다. 있으며, 힘차게 긴지라 심장의 못할 사막이다. 없으면 긴지라 가치를 이것이다.",
  },
];

const DocumentItemsPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>서류 문항 관리</S.Title>
          <S.About>지원 서류 문항을 관리합니다.</S.About>
          <S.Title>공통 문항</S.Title>
          {questions.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.Title>기획 · 디자인 트랙 문항</S.Title>
          {questions.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.Title>프론트엔드 트랙 문항</S.Title>
          {questions.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.Title>백엔드 트랙 문항</S.Title>
          {questions.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <S.ButtonContainer>
            <S.ButtonSet>
              <SaveButton>저장</SaveButton>
            </S.ButtonSet>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default DocumentItemsPage;
