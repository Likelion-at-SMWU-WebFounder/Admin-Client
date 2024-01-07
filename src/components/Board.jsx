import React, { useState } from "react";
import styled from "styled-components";
import * as S from "../style/LayoutStyle";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Select, { StylesConfig } from "react-select";

const BoardContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSelect = styled(Select)`
  width: 150px;
`;

const customStyles = {
  control: (provided) => ({
    ...provided,
    outline: "none",
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "white",
    },
  }),
  // menu: (provided) => ({
  //   ...provided,
  //   backgroundColor: "pink",
  //   color: "white",
  // }),
  option: (provided, state) => ({
    ...provided,
    outline: "none",
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "black",
    backgroundColor: "white",
    fontSize: state.selectProps.myFontSize,
    "&:hover": {
      backgroundColor: "#d2d2d2",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    backgroundColor: "black",
  }),
};

const Board = () => {
  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const boardList = [];

  for (let i = 1; i <= 131; i++) {
    boardList.push({
      id: i,
      name: "김멋사",
      phone: "01012345678",
      num: "2345678",
      track: "백엔드",
      time: "2024-03-25 04:24:43",
    });
  }

  const tracks = [
    { value: "all", label: "전체트랙" },
    { value: "design", label: "기획 · 디자인" },
    { value: "front", label: "프론트엔드" },
    { value: "back", label: "백엔드" },
  ];

  const [selectTrack, setSelectTrack] = useState(tracks[0]);

  return (
    <BoardContainer>
      <Wrapper>
        <S.SubTitle>지원 서류</S.SubTitle>
        <StyledSelect
          options={tracks}
          onChange={(e) => {
            if (e) {
              setSelectTrack(e.value);
            } else {
              setSelectTrack("");
            }
          }}
          defaultValue={tracks[0]}
          styles={customStyles}
          isSearchable={false}
        ></StyledSelect>
      </Wrapper>
      <Posts list={postsData(boardList)} />
      <Pagination
        limit={limit}
        page={page}
        totalPosts={boardList.length}
        setPage={setPage}
      />
    </BoardContainer>
  );
};

export default Board;
