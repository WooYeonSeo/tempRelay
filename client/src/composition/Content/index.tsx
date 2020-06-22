import * as React from "react";
import styled from "styled-components";
import { useFeProblemsQuery } from "../../react-components.d";

const Header = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height: 100%;
`;
const Warpper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  padding: 13px 25px;
`;

function Content({
  children,
  title
}: {
  children: React.ReactElement;
  title: String;
}) {
  const { data } = useFeProblemsQuery();
  console.log("data", data);
  return (
    <Warpper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <div>{children}</div>
    </Warpper>
  );
}
export default Content;
