import * as React from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  RESET_SIMILAR_NUMBER,
  GET_SIMILAR_NUM
} from "../../apollo/store/interval.cache";
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
  display: flex;
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
  flex: 1;
  padding: 16px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const ButtonContainer = styled.div`
  display: inline-block;
`;
interface Problem {
  id: number;
  type: string;
  unit: string;
  count: number;
  problemURL: string;
  handleDeleteProb: (
    probId: number
  ) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
function ProblemCard({
  id,
  type,
  unit,
  count,
  problemURL,
  handleDeleteProb
}: Problem) {
  const [changeSimliarNumber] = useMutation(RESET_SIMILAR_NUMBER);
  const { data: similarNumObj } = useQuery(GET_SIMILAR_NUM);
  const handleOnClick = (value: number, unit: string) => (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    changeSimliarNumber({ variables: { similarNum: value, unitName: unit } });
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <ProblemType>{type}</ProblemType>
          <ProblemUnit title={unit}>{unit}</ProblemUnit>

          <ButtonContainer>
            <RightButton onClick={handleDeleteProb(id)} isSelected={false}>
              삭제
            </RightButton>
            <RightButton
              onClick={handleOnClick(id, unit)}
              isSelected={similarNumObj.similarNum === id}
            >
              유사문항
            </RightButton>
          </ButtonContainer>
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
