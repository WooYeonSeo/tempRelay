import * as React from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  RESET_SIMILAR_NUMBER,
  GET_SIMILAR_NUM
} from "../../apollo/store/interval.cache";
import { Problem } from "../../react-components.d";

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

const RightButton = styled(ButtonStyle)<{ isSelected: boolean }>`
  float: right;
  margin: 5px 8px 5px 0;
  ${props =>
    props.isSelected &&
    ` color: #ffffff;
    background: #00abff;`}
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
interface IProblem {
  id: number;
  type: string;
  unit: string;
  count: number;
  problemURL: string;
  addProblems: (
    newProb: number
  ) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  exChangeProblem: (
    probId: number
  ) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
function ProblemCard({
  id,
  type,
  unit,
  count,
  problemURL,
  addProblems,
  exChangeProblem
}: IProblem) {
  const { data: similarNumObj } = useQuery(GET_SIMILAR_NUM);

  return (
    <Wrapper>
      <Header>
        <Title>
          <ProblemType>{type}</ProblemType>
          <ProblemUnit>{unit}</ProblemUnit>

          <RightButton onClick={exChangeProblem(id)} isSelected={false}>
            교체
          </RightButton>
          <RightButton
            onClick={addProblems(id)}
            isSelected={similarNumObj.similarNum == id}
          >
            추가
          </RightButton>
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
