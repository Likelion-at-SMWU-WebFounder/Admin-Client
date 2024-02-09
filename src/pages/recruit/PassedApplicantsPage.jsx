import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
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
  const [docs, setDocs] = useState([]);

  const fetchData = async () => {
    try {
      const data = await apiModule.fetchDocsResult();
      setDocs(data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteDocsResult = async (checkedItems) => {
    try {
      await apiModule.deleteDocsResult(checkedItems);
      await fetchData();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container>
          <S.Title>합격자 선정</S.Title>
          <S.About>합격서류를 분류하여 별도로 관리합니다.</S.About>
          <S.SubTitle>서류 합격자 테이블</S.SubTitle>
          <Board pass={docs} type="type2" onDelete={deleteDocsResult} />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default PassedApplicantsPage;
