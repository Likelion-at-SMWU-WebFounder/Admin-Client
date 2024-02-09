import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
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

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const ApplicationStatusPage = () => {
  const [docs, setDocs] = useState([]);
  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  const useCountNum = (end, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    useEffect(() => {
      let currentNumber = start;
      const counter = setInterval(() => {
        const progress = easeOutExpo(++currentNumber / totalFrame);
        setCount(Math.round(end * progress));

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    }, [end, frameRate, start, totalFrame]);

    return count;
  };

  // TODO : 지원자 현황 조회
  // const fetchDocsResult = async () => {
  //   const url = "/api/manage/docs/result";
  //   const tracks = ["all", "pm", "fe", "be"];

  //   try {
  //     const responses = await Promise.all(
  //       tracks.map((track) => axios.get(baseUrl + url, { params: { track } }))
  //     );
  //     const data = responses.map((response) => response.data.result);
  //     setDocs(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   // fetchDocsResult();
  //   console.log(docs);
  // }, []);

  const handleAddToDocs = async (checkedItems) => {
    try {
      await apiModule.addToDocs(checkedItems);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <VLine></VLine>
        <S.Container>
          <S.Title>지원 현황 및 지원 서류</S.Title>
          <S.About>
            신규모집 지원현황을 확인하고, 지원 서류를 관리합니다.
          </S.About>
          <S.SubTitle>지원 현황</S.SubTitle>
          <StateContainer>
            <StateBox>
              <StateItem>전체 지원자 수</StateItem>
              <StateNum>{useCountNum(140, 0, 2000)}명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>기획·디자인 지원자 수</StateItem>
              <StateNum>{useCountNum(30, 0, 2000)}명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>프론트엔드 지원자 수</StateItem>
              <StateNum>{useCountNum(50, 0, 2000)}명</StateNum>
            </StateBox>
            <StateBox>
              <StateItem>백엔드 지원자 수</StateItem>
              <StateNum>{useCountNum(60, 0, 2000)}명</StateNum>
            </StateBox>
          </StateContainer>
          <Board pass={docs} type="type1" onAdd={handleAddToDocs} />
        </S.Container>
      </S.Layout>
    </>
  );
};

export default ApplicationStatusPage;
