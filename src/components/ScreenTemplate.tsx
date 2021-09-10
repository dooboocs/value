import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  title?: string;
  backBtn?: boolean;
  children?: React.ReactChild | React.ReactChild[];
}

function ScreenTemplate({ backBtn, title, children }: IProps) {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderItem origin="left" onClick={goBack}>
          {backBtn ? "Back" : null}
        </HeaderItem>
        <HeaderItem origin="center">{title}</HeaderItem>
        <HeaderItem origin="right" backgroundColor="orange"></HeaderItem>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderItem = styled.div<{
  origin: "left" | "right" | "center";
  backgroundColor?: string;
}>`
  display: flex;
  height: 100%;
  flex: ${(props) => (props.origin === "center" ? 2 : 1)};
  justify-content: ${(props) => props.origin};
  align-items: center;
`;

const Content = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export default ScreenTemplate;
