import * as React from "react";
import styled from "styled-components";
import { useFeProblemsQuery } from "../../react-components.d";
import ProblemCard from "../../component/ProblemCard";

const Warpper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid #f5f5f5;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  padding: 13px 25px;
`;

const ContentBox = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  overflow: scroll;
`;
function Content({
  children,
  title
}: {
  children: React.ReactElement;
  title: String;
}) {
  return (
    <Warpper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ContentBox>{children}</ContentBox>
    </Warpper>
  );
}
export default Content;
