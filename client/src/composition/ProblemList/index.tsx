import * as React from "react";
import styled from "styled-components";
import {
  useFeProblemsQuery,
  Problem,
  FeProblemsQuery
} from "../../react-components.d";
import Content from "../../component/Content";
import ProblemCard from "../../component/ProblemCard";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_SIMILAR_NUM,
  RESET_SIMILAR_NUMBER
} from "../../apollo/store/interval.cache";

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

function ProblemList() {
  const { data, updateQuery } = useFeProblemsQuery();
  const { data: similarNumObj } = useQuery(GET_SIMILAR_NUM);
  const [changeSimliarNumber] = useMutation(RESET_SIMILAR_NUMBER);

  const handleDeleteProb = (id: number) => (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    updateQuery((prevdata: FeProblemsQuery) => {
      // 선택된 문제 배열에서 삭제
      const filteredData =
        prevdata.feProblems &&
        (prevdata.feProblems as Problem[]).filter((prob: Problem) => {
          return prob.id !== id;
        });

      return { feProblems: filteredData };
    });
    // id ===similarNumObj.similarNum 유사문항 리셋!
    if (id === similarNumObj.similarNum) {
      changeSimliarNumber({
        variables: {
          similarNum: 0,
          unitName: ""
        }
      });
    }
  };

  return (
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
                  {...{ handleDeleteProb }}
                />
              )
            );
          })}
      </>
    </Content>
  );
}
export default ProblemList;
