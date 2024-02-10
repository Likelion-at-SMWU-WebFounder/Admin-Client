import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TimePopup from "./TimePopup";

const StyledInput = styled.input`
  position: relative;
  /* margin-left: 10px; */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  top: 4px;
  width: 20px;
  height: 20px;
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;

  &:checked {
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #eb9537;

    &::before {
      content: "✔"; /* 표시할 내용 (체크 표시) */
      font-size: 14px; /* 표시할 내용의 크기 조절 */
      color: black; /* 표시할 내용의 색상 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Table = styled.div`
  display: table;
  /* flex-direction: column; */
  width: 100%;
  border-collapse: collapse;
`;

const ContentWrap = styled.div`
  display: table-row-group;
`;

const ContentTitle = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
  display: table-row;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* flex: 1; */
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 8px;
`;

const Cell = styled.div`
  display: table-cell;
  padding: 8px;
  /* border: 1px solid white; */
  /* flex-direction: column; */
`;

const Button = styled.button`
  display: table-cell;
  border-radius: 15px;
  border: none;
  background: #d9d9d9;
  width: 139px;
  height: 31px;
  /* align-items: center; */
  flex-shrink: 0;
  /* margin: 2px; */
  color: #111;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.01px;
`;

const Content = styled.div`
  /* display: flex;
  flex-direction: row; */
  /* justify-content: space-between; */
  display: table-row;
  align-items: center;
  border-bottom: 1px solid white;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.263px;
  /* margin-bottom: 10px; */
`;

const ImageWrap = styled.div``;

// TODO : 면접 시간
const TimePosts = ({
  list,
  checkedItems,
  setCheckedItems,
  showPopup,
  setShowPopup,
}) => {
  const [interviewTimes, setInterviewTimes] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  // TODO : 면접 시간 단순 get
  const saveInterviewTime = (joinerId, date, time) => {
    setInterviewTimes((prevTimes) => ({
      ...prevTimes,
      [joinerId]: { date, time }, // joinerId를 키로 사용하여 각 아이템의 면접 시간을 저장
    }));
  };

  const onCheckBoxAll = (e) => {
    if (e.target.checked) {
      const checkedListArr = [];
      list.forEach((item) => checkedListArr.push(item.joinerId));
      setCheckedItems(checkedListArr);
    } else {
      setCheckedItems([]);
    }
  };

  // 개별 체크
  // 체크된 아이템의 아이디를 배열 형태로 관리
  // 체크가 false이면 해당 item의 id가 아닌 것들만 담음.
  const onChangeCheckBox = (e, item) => {
    const isChecked = e.target.checked;
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return [...prevCheckedItems, item.joinerId];
      } else {
        return prevCheckedItems.filter((no) => no !== item.joinerId);
      }
    });
  };

  return (
    <Table>
      <ContentWrap>
        <ContentTitle>
          <TableCell>
            <StyledInput type="checkbox" onChange={(e) => onCheckBoxAll(e)} />
          </TableCell>
          <TableCell>번호</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>전화번호</TableCell>
          <TableCell>학번</TableCell>
          <TableCell>지원트랙</TableCell>
          <TableCell>면접 시간</TableCell>
          <TableCell></TableCell>
        </ContentTitle>
        {list !== undefined ? (
          list.map((data, idx) => (
            <Content key={idx}>
              <Cell>
                {!showPopup && (
                  <StyledInput
                    type="checkbox"
                    onChange={(e) => onChangeCheckBox(e, data)}
                    checked={checkedItems.includes(data.joinerId)}
                  />
                )}
              </Cell>
              <Cell>{data.joinerId}</Cell>
              <Cell>{data.name}</Cell>
              <Cell>{data.phoneNum}</Cell>
              <Cell>{data.studentID}</Cell>
              <Cell>{data.track}</Cell>
              <Cell>
                {interviewTimes[data.joinerId]
                  ? `${interviewTimes[data.joinerId].date} ${
                      interviewTimes[data.joinerId].time
                    }`
                  : "-"}
              </Cell>

              {showPopup && selectedItemId === data.joinerId && (
                <TimePopup
                  track={data.track}
                  aname={data.name}
                  joinerId={data.joinerId}
                  onClose={() => setShowPopup(false)}
                  onSave={(date, time) => {
                    saveInterviewTime(data.joinerId, date, time);
                  }}
                />
              )}
              <Button
                onClick={() => {
                  setShowPopup(true);
                  setSelectedItemId(data.joinerId);
                }}
              >
                면접 시간 입력
              </Button>
            </Content>
          ))
        ) : (
          <ImageWrap>
            <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt="loadingImg" />
          </ImageWrap>
        )}
      </ContentWrap>
    </Table>
  );
};

export default TimePosts;
