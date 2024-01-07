import React from "react";

const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;

const ApplicationStatusPage = () => {
<<<<<<< Updated upstream
  return <div></div>;
=======
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
          <Board />
          <S.ButtonContainer>
            <S.ButtonSet>
              <ResetButton>지원자 초기화</ResetButton>
              <AddButton>합격자 테이블에 추가 + </AddButton>
            </S.ButtonSet>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
>>>>>>> Stashed changes
};

export default ApplicationStatusPage;
