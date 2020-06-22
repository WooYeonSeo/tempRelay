import * as React from "react";
import styled from "styled-components";
import { useFeProblemsQuery, useFeSimilarsQuery } from "../react-components.d";
import Content from "../composition/Content";
import ProblemCard from "../component/ProblemCard";
import { useQuery } from "@apollo/react-hooks";
import { GET_SIMILAR_NUM } from "../apollo/store/interval.cache";
const Warpper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  background: white;
  height: 100%;
`;

const Divider = styled.p`
  width: 2px;
  height: 100%;
  border-left: 2px solid #e0e0e0;
  background: #f5f5f5;
  padding-right: 8px;
`;

export const ButtonStyle = styled.p`
  display: inline-block;
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

export const EmptyContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  text-align: center;
  line-height: 28px;
  color: #9f9f9f;
`;
const UnitNameBar = styled.div`
  height: 36px;
  font-size: 14px;
  padding: 8px 25px;
  line-height: 20px;
  background: #fafafa;
  color: #4c4c4c;
`;
export function Router() {
  const { data } = useFeProblemsQuery();
  const { data: simData } = useFeSimilarsQuery();
  // console.log("data", data);
  const { data: similarNumObj } = useQuery(GET_SIMILAR_NUM);

  return (
    <Warpper>
      {console.log("similarNumObj.similarNum", similarNumObj)}
      <Content title="학습지 상세 편집">
        <>
          {data &&
            data.feProblems &&
            data.feProblems.map((problem, index) => {
              return (
                problem && (
                  <ProblemCard
                    id={problem.id}
                    type={problem.problemType}
                    unit={problem.unitName}
                    count={index + 1}
                    problemURL={problem.problemURL}
                    key={problem.id}
                  />
                )
              );
            })}
        </>
      </Content>
      <Divider> </Divider>
      <Content title="문항 교체/추가">
        {data && similarNumObj.similarNum == 0 ? (
          <EmptyContent>
            <ButtonStyle>유사문항</ButtonStyle> 버튼을 누르면
            <br />
            해당 문제의 유사 문항을 볼 수 있습니다.
          </EmptyContent>
        ) : (
          <>
            <UnitNameBar>{similarNumObj.unitName}</UnitNameBar>
            {simData &&
              simData.feSimilars &&
              simData.feSimilars.map((problem, index) => {
                return (
                  problem && (
                    <ProblemCard
                      id={problem.id}
                      type={problem.problemType}
                      unit={problem.unitName}
                      count={index + 1}
                      problemURL={problem.problemURL}
                      key={problem.id}
                    />
                  )
                );
              })}
          </>
        )}
      </Content>
    </Warpper>
  );
}
