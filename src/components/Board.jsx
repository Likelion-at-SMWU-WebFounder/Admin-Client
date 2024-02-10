import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "../style/LayoutStyle";
import Posts from "./Posts";
import TimePosts from "./TimePosts";
import Pagination from "./Pagination";
import Select from "react-select";

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
  width: 351px;
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

const Board = ({ pass, type, checking, onAdd, onDelete }) => {
  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수

  const [selectTrack, setSelectTrack] = useState({
    value: "all",
    label: "전체트랙",
  }); // 선택된 트랙

  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    let filteredPosts = []; // filteredPosts 초기화
    console.log(pass);
    console.log(posts);
    console.log(selectTrack.value);
    if (posts && posts.length > 0) {
      // posts가 정의되고 배열인지 확인
      switch (selectTrack.value) {
        case "all":
          filteredPosts = posts[0]; // data 배열의 첫 번째 요소 선택
          break;
        case "pm":
          filteredPosts = posts[1]; // data 배열의 두 번째 요소 선택
          break;
        case "fe":
          filteredPosts = posts[2]; // data 배열의 세 번째 요소 선택
          break;
        case "be":
          filteredPosts = posts[3]; // data 배열의 네 번째 요소 선택
          break;
        default:
          filteredPosts = []; // 기본값은 빈 배열로 설정
      }
    }
    // filteredPosts = posts;
    console.log(filteredPosts);
    let result = filteredPosts.slice(offset, offset + limit);

    return { filteredPosts: result, filteredPostsLength: filteredPosts.length };
  };

  const { filteredPosts, filteredPostsLength } = postsData(pass);
  const handleSelectTrackChange = (e) => {
    if (e) {
      setSelectTrack(e);
      setPage(1);
    } else {
      setSelectTrack("");
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

  for (let i = 131; i <= 150; i++) {
    boardList.push({
      id: i,
      name: "김멋사",
      phone: "01012345678",
      num: "2345678",
      track: "기획 · 디자인",
      time: "2024-03-25 04:24:43",
    });
  }

  // 관리자 지원현황 및 서류 get
  // 서류 확인 버튼 누르면 해당 id 이동

  // 서류 합격자 전제 조회 get

  // 면접 최종 합격자 전체 조회 get

  // get 해오고 postsData로 전달

  const tracks = [
    { value: "all", label: "전체트랙" },
    { value: "pm", label: "기획 · 디자인" },
    { value: "fe", label: "프론트엔드" },
    { value: "be", label: "백엔드" },
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
          onChange={handleSelectTrackChange}
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
