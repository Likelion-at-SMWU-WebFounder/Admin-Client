import React, { useState } from "react";
import styled from "styled-components";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  position: relative;
  color: black;
  background-color: white;
  border-radius: 10px;
  width: 1000px;
  height: 750px;
  padding: 50px;
`;

const HopeTimeContainer = styled.div`
  position: absolute;
  top: 127px;
  font-size: 30px;
  margin-top: 0px;
`;

const Ul = styled.ul`
  margin-top: 30px;
  margin-left: 30px;
`;

const TimeDiv = styled.li`
  font-size: 25px;
  list-style-type: disc;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  position: absolute;
  right: 16px;
  top: 30px;
  font-size: 55px;
  border-radius: 5px;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
`;

const SaveButton = styled.button`
  position: absolute;
  bottom: 27px;
  right: 16px;
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #9fb9fd;
  width: 80px;
  height: 44px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.0505em;
  text-align: center;

  box-sizing: content-box;
`;

const TimePopup = ({ track, aname, onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSave = () => {
    onSave(selectedDate, selectedTime);
    onClose();
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <CancelButton onClick={onClose}>x</CancelButton>
        <HopeTimeContainer>
          <div>
            <Bold>{track}</Bold> 트랙 서류합격자 <Bold>{aname}</Bold>님 희망
            면접 시간
          </div>
          <Ul>
            <TimeDiv>3.15 수 17:00- 17:40</TimeDiv>
            <TimeDiv>3.15 수 17:00- 17:40</TimeDiv>
          </Ul>

          <h2 style={{ fontSize: "30px", margin: "30px auto" }}>
            면접 확정 시간을 입력해주세요
          </h2>
          <Select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="">날짜 선택</option>
            <option value="3.15 (수)">3.15 (수)</option>
            <option value="3.16 (목)">3.16 (목)</option>
            <option value="3.17 (금)">3.17 (금)</option>
          </Select>
          <Select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">시간 선택</option>
            <option value="17:00- 17:40">17:00- 17:40</option>
            <option value="17:00- 17:40">17:00- 17:40</option>
            <option value="17:00- 17:40">17:00- 17:40</option>
          </Select>
        </HopeTimeContainer>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default TimePopup;
