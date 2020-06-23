import * as React from "react";
import styled from "styled-components";
import {
  useFeProblemsQuery,
  useFeSimilarsQuery,
  Problem,
  FeProblemsQuery,
  FeSimilarsQuery
} from "../react-components.d";
import Content from "../component/Content";
import SimilarProblemCard from "../component/SimilarProblemCard";
import ProblemList from "../composition/ProblemList";
import SimilarProblemList from "../composition/SimilarProblemList";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_SIMILAR_NUM,
  RESET_SIMILAR_NUMBER
} from "../apollo/store/interval.cache";
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
  return (
    <Warpper>
      <ProblemList />
      <Divider> </Divider>
      <SimilarProblemList />
    </Warpper>
  );
}
