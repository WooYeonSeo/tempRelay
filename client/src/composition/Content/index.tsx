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
        <span>{title}</span>
      </Header>
      <div>{children}</div>
    </Warpper>
  );
}
export default Content;
