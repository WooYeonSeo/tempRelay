import * as React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  border-bottom: 8px solid #f5f5f5;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  padding: 3px 0;
  line-height: 20px;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
`;

const ProblemType = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  color: #9f9f9f;
  font-weight: bold;
  padding: 16px 38px;
`;
const ProblemUnit = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  color: #4c4c4c;

  padding: 16px 0;
`;
export const ButtonStyle = styled.span`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 3px;
  color: #00abff;
  width: 80px;
  height: 36px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
  line-height: 14px;
  cursor: pointer;
  /* &:hover {
    color: #ffffff;
    background: #00abff;
  } */
`;

const RightButton = styled(ButtonStyle)`
  float: right;
  margin: 5px 8px 5px 0;
`;

const QNumber = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  font-family: Noto Sans KR;
  padding: 12px 36px;
  width: 15px;
  height: 36px;
  color: #02c7f2;
`;

const ProblemImg = styled.img`
  margin: 18px 1px 23px 1px;

  background: blue;
`;
interface Problem {
  type: string;
  unit: string;
  count: number;
  problemURL: string;
}
function ProblemCard({ type, unit, count, problemURL }: Problem) {
  return (
    <Wrapper>
      <Header>
        <Title>
          <ProblemType>{type}</ProblemType>
          <ProblemUnit>{unit}</ProblemUnit>

          <RightButton>삭제</RightButton>
          <RightButton>유사문항</RightButton>
        </Title>
      </Header>
      <ContentBox>
        <QNumber>{count}.</QNumber>
        <ProblemImg src={problemURL}></ProblemImg>
      </ContentBox>
    </Wrapper>
  );
}
export default ProblemCard;
