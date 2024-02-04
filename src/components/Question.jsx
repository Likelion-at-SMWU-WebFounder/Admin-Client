import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Question = ({ documentData }) => {
  const [questions, setQuestions] = useState([]);
  const [trackQuestions, setTrackQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (documentData) {
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

          if (documentData.studentInfo) {
            switch (documentData.studentInfo.track) {
              case "pm":
                setTrackQuestions(data[1]?.map((item) => item.content) || []);
                break;
              case "fe":
                setTrackQuestions(data[2]?.map((item) => item.content) || []);
                break;
              case "be":
                setTrackQuestions(data[3]?.map((item) => item.content) || []);
                break;
              default:
                setTrackQuestions(data[0]?.map((item) => item.content) || []);
            }
          }

          console.log(trackQuestions);

          setLoading(false);
        } catch (err) {
          console.error(err);
          setLoading(false);
        }
      };

      fetchDocuments();
    }
  }, [documentData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        {questions[0].map((question, index) => (
          <QuestionContainer key={index}>
            <Text fontSize="18px" marginTop="30px" marginLeft="30px">
              {`${index + 1}: `}
              &nbsp;
              {question.content}
            </Text>
            <Textarea fontSize="14px" marginLeft="30px">
              {documentData.answerList && documentData.answerList[index]}
            </Textarea>
          </QuestionContainer>
        ))}

        <Hr marginTop="30px" />

        {trackQuestions.map((question, index) => (
          <QuestionContainer key={index}>
            <Text fontSize="18px" marginTop="30px" marginLeft="30px">
              {`${index + 1}: `}
              &nbsp;
              {question}
            </Text>
            <Textarea fontSize="14px" marginLeft="30px">
              {documentData.answerList &&
                documentData.answerList[index + questions[0].length]}
            </Textarea>
          </QuestionContainer>
        ))}
      </>

      <QuestionContainer>
        <Text fontSize="18px" marginTop="30px" marginLeft="30px">
          기술블로그, 포트폴리오, GitHub 등 자유롭게 URL 형식으로 제출해주세요.
          *선택
        </Text>
        <Textarea>
          {documentData.answerList &&
            documentData.answerList[documentData.answerList.length - 1]}
        </Textarea>
      </QuestionContainer>

      <QuestionContainer>
        <Text fontSize="18px" marginTop="30px" marginLeft="30px">
          면접 가능 시간
        </Text>
        {documentData.interviewTime?.map((item, i) => (
          <Text key={i} fontSize="15px" marginTop="30px" marginLeft="30px">
            {item}
          </Text>
        ))}
      </QuestionContainer>
    </>
  );
};

export default Question;

const Hr = styled.hr`
  border: 1px solid #ffffff;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  width: 1100px;
`;

const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const Textarea = styled.div`
  margin: 30px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 10px;
  width: 1000px;
  min-height: 100px;
  height: fit-content;
  resize: vertical;
  background: #111111;
`;
