import React from "react";
import styled from "styled-components";
import TransactionWidget from "components/TransactionWidget";
import WidgetTemplate from "components/WidgetTemplate";

function OverviewPage() {
  return (
    <Container>
      <Col>
        <Title>Overview</Title>
        <WidgetTemplate size="lg" />
      </Col>
      <Col>
        <Title>Latest Transactions</Title>
        <WidgetTemplate size="lg" linkTo="/transactions">
          <TransactionWidget />
        </WidgetTemplate>
      </Col>
      <Row>
        <WidgetTemplate size="md" />
      </Row>
      <Row>
        <WidgetTemplate size="sm" title="Bills" linkTo="/bills" />
        <WidgetTemplate size="sm" title="Installments" linkTo="/installments" />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  background-color: #f5f5f7;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export default OverviewPage;
