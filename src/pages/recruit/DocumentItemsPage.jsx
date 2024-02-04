import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const QuestionContainer = styled.div``;

const QuestionDiv = styled.div`
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
`;

const Div = styled.div`
  height: 40px;
`;

const EditButton = styled.button`
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

const ResetButton = styled.button`
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #b988e0;
  width: 145px;
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

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const DocumentItemsPage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const fetchDocuments = async () => {
    const baseUrl =
      "http://localhost:8080/api/manage/docs/quest/?year=2024&track=";
    const tracks = ["common", "pm", "fe", "be"];

    try {
      const responses = await Promise.all(
        tracks.map((track) => axios.get(baseUrl + track))
      );
      const data = responses.map((response) => response.data.result);

      console.log(data);

      setQuestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.Container>
          <S.Title>서류 문항 관리</S.Title>
          <S.About>지원 서류 문항을 관리합니다.</S.About>
          <S.RowDiv>
            <S.Title>공통 문항</S.Title>
          </S.RowDiv>
          {questions[0]?.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.RowDiv>
            <S.Title>기획 · 디자인 트랙 문항</S.Title>
          </S.RowDiv>
          {questions[1]?.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.RowDiv>
            <S.Title>프론트엔드 트랙 문항</S.Title>
          </S.RowDiv>
          {questions[2]?.map((data) => (
            <QuestionContainer key={data.id}>
              <QuestionDiv>{data.content}</QuestionDiv>
            </QuestionContainer>
          ))}
          <Div></Div>
          <S.RowDiv>
            <S.Title>백엔드 트랙 문항</S.Title>
          </S.RowDiv>
          {questions[3]?.map((data) => (
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
              <EditButton
                onClick={() => {
                  navigate("/sooklion-admin/editdocument");
                }}
              >
                수정
              </EditButton>
              <ResetButton>초기화</ResetButton>
            </S.ButtonSet>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default DocumentItemsPage;
