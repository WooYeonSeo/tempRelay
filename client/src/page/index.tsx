import * as React from "react";
import styled from "styled-components";
import { useFeProblemsQuery } from "../react-components.d";
import Content from "../composition/Content";

const Warpper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const Divider = styled.p`
  background-color: #e0e0e0;
  background: #e0e0e0;
  width: 2px;
  height: 100%;
`;
export function Router() {
  const { data } = useFeProblemsQuery();
  console.log("data", data);
  return (
    <Warpper>
      <Content title="학습지 상세 편집">
        <span>내용 넣기</span>
      </Content>
      <Divider> a</Divider>
      <Content title="문항 교체/추가">
        <span>내용 넣기</span>
      </Content>
    </Warpper>
  );
}
