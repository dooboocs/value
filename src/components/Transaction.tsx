import React from "react";
import moment from "moment";
import styled from "styled-components";

function Transaction(item) {
  return (
    <Container>
      <Image />
      <Content>
        <Left>
          <span style={{ fontSize: 18 }}>{item.title}</span>
          <span style={{ fontSize: 14 }}>
            {item.date
              ? moment(item.date.toDate()).format("MMMM DD")
              : "Undefiend"}
          </span>
        </Left>
        <Right>
          <span style={{ fontSize: 18 }}>
            {item.amount ? `$ ${item.amount}` : "Undefiend"}
          </span>
          <span style={{ fontSize: 14 }}>
            {item.amount ? `$ ${item.amount}` : "Undefiend"}
          </span>
        </Right>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 3px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: content-box;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export default Transaction;
