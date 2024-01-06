import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const QuestionContainer = styled.div``;

const QuestionInput = styled.textarea`
  padding: 10px 10px;
  min-width: 1000px;
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
  height: 86px;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Div = styled.div`
  height: 40px;
`;

const ItemButton = styled.button`
  border: none;
  border-radius: 15px;
  background-color: #d9d9d9;
  width: 97px;
  height: 24px;
  margin-left: 10px;
  font-size: 15px;
  &:hover {
    background-color: #afafaf;
  }
`;

const SaveButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #5c67ce;
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

const DocumentItemsEditPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>서류 문항 관리</S.Title>
          <S.About>지원 서류 문항을 관리합니다.</S.About>
          <S.RowDiv>
            <S.Title>공통 문항</S.Title>
            <ItemButton>문항 추가 +</ItemButton>
            <ItemButton>문항 제거 -</ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>기획 · 디자인 트랙 문항</S.Title>
            <ItemButton>문항 추가 +</ItemButton>
            <ItemButton>문항 제거 -</ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>프론트엔드 트랙 문항</S.Title>
            <ItemButton>문항 추가 +</ItemButton>
            <ItemButton>문항 제거 -</ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>백엔드 트랙 문항</S.Title>
            <ItemButton>문항 추가 +</ItemButton>
            <ItemButton>문항 제거 -</ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
            <QuestionInput placeholder="문항 질문을 작성해주세요 ..."></QuestionInput>
          </QuestionContainer>
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

export default DocumentItemsEditPage;
