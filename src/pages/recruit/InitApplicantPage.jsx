import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import axios from "axios";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const InitApplicantPage = () => {
  const DeleteButton = styled.button`
    border: none;
    margin-right: 20px;
    border-radius: 15px;
    background: #ff6e6e;
    width: 328px;
    height: 64px;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.414px;
  `;

  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.Container>
          <S.Title>지원자 정보 초기화</S.Title>
          <S.About>
            지원자 정보를 초기화합니다. 초기화된 정보는 재복구가 어렵습니다.
          </S.About>
          <DeleteButton>지원자 정보 초기화</DeleteButton>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default InitApplicantPage;
