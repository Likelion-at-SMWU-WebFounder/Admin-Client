import React, { useState, useEffect } from "react";
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

  const [checkedItems, setCheckedItems] = useState([]);
  console.log("checkedItems", checkedItems);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);
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
      {type === "type3" && (
        <TimePosts
          list={filteredPosts}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      {(type === "type1" || type === "type2") && (
        <Posts
          list={filteredPosts}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      )}
      {!showPopup && (
        <Pagination
          limit={limit}
          page={page}
          totalPosts={filteredPostsLength}
          setPage={setPage}
        />
      )}
      {type === "type1" && (
        <S.ButtonContainer>
          <S.ButtonSet>
            <ResetButton>지원자 초기화</ResetButton>
            <AddButton>합격자 테이블에 추가 + </AddButton>
          </S.ButtonSet>
        </S.ButtonContainer>
      )}
      {type === "type2" && (
        <S.ButtonContainer>
          <S.ButtonSet>
            <DeleteButton
              onClick={() => {
                onDelete(checkedItems);
                setCheckedItems([]);
              }}
            >
              삭제
            </DeleteButton>
          </S.ButtonSet>
        </S.ButtonContainer>
      )}
      {type === "type3" && !showPopup && (
        <S.ButtonContainer>
          <S.ButtonSet>
            <AddButton
              onClick={() => {
                onAdd(checkedItems);
                setCheckedItems([]);
              }}
            >
              최종합격자 테이블에 추가 +
            </AddButton>
            <DeleteButton
              onClick={() => {
                onDelete(checkedItems);
                setCheckedItems([]);
              }}
            >
              삭제
            </DeleteButton>
          </S.ButtonSet>
        </S.ButtonContainer>
      )}
    </BoardContainer>
  );
};

export default Board;
