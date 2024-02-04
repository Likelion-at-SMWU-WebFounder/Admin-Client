import React, { useState } from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const QuestionContainer = styled.div``;

const QuestionInput = styled.textarea`
  padding: 10px 10px;
  min-width: 1000px;
  height: fit-content;
  min-height: 150px;
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
  // const addQuestion = async () => {
  //   const baseUrl = "http://localhost:8080/api/manage/docs/quest";
  //   try {
  //     await axios.post(baseUrl,{

  //     })
  //   }
  // };

  const [commonItemCount, setCommonItemCount] = useState(3); // 초기 입력 수를 3으로 가정합니다.
  const [designItemCount, setDesignItemCount] = useState(3);
  const [frontendItemCount, setFrontendItemCount] = useState(3);
  const [backendItemCount, setBackendItemCount] = useState(3);

  const handleAddQuestion = (section) => {
    switch (section) {
      case "common":
        setCommonItemCount((prevCount) => prevCount + 1);
        break;
      case "design":
        setDesignItemCount((prevCount) => prevCount + 1);
        break;
      case "frontend":
        setFrontendItemCount((prevCount) => prevCount + 1);
        break;
      case "backend":
        setBackendItemCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  const handleRemoveQuestion = (section) => {
    switch (section) {
      case "common":
        setCommonItemCount((prevCount) => Math.max(prevCount - 1, 1));
        break;
      case "design":
        setDesignItemCount((prevCount) => Math.max(prevCount - 1, 1));
        break;
      case "frontend":
        setFrontendItemCount((prevCount) => Math.max(prevCount - 1, 1));
        break;
      case "backend":
        setBackendItemCount((prevCount) => Math.max(prevCount - 1, 1));
        break;
      default:
        break;
    }
  };

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
            <ItemButton onClick={() => handleAddQuestion("common")}>
              문항 추가 +
            </ItemButton>
            <ItemButton onClick={() => handleRemoveQuestion("common")}>
              문항 제거 -
            </ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            {[...Array(commonItemCount)].map((_, index) => (
              <QuestionInput
                key={index}
                placeholder="문항 질문을 작성해주세요 ..."
              ></QuestionInput>
            ))}
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>기획 · 디자인 트랙 문항</S.Title>
            <ItemButton onClick={() => handleAddQuestion("design")}>
              문항 추가 +
            </ItemButton>
            <ItemButton onClick={() => handleRemoveQuestion("design")}>
              문항 제거 -
            </ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            {[...Array(designItemCount)].map((_, index) => (
              <QuestionInput
                key={index}
                placeholder="문항 질문을 작성해주세요 ..."
              ></QuestionInput>
            ))}
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>프론트엔드 트랙 문항</S.Title>
            <ItemButton onClick={() => handleAddQuestion("frontend")}>
              문항 추가 +
            </ItemButton>
            <ItemButton onClick={() => handleRemoveQuestion("frontend")}>
              문항 제거 -
            </ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            {[...Array(frontendItemCount)].map((_, index) => (
              <QuestionInput
                key={index}
                placeholder="문항 질문을 작성해주세요 ..."
              ></QuestionInput>
            ))}
          </QuestionContainer>
          <Div></Div>
          <S.RowDiv>
            <S.Title>백엔드 트랙 문항</S.Title>
            <ItemButton onClick={() => handleAddQuestion("backend")}>
              문항 추가 +
            </ItemButton>
            <ItemButton onClick={() => handleRemoveQuestion("backend")}>
              문항 제거 -
            </ItemButton>
          </S.RowDiv>
          <QuestionContainer>
            {[...Array(backendItemCount)].map((_, index) => (
              <QuestionInput
                key={index}
                placeholder="문항 질문을 작성해주세요 ..."
              ></QuestionInput>
            ))}
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
