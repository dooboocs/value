import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  size?: "lg" | "md" | "sm";
  title?: string;
  color?: string;
  children?: React.ReactChild | React.ReactChild[];
  linkTo?: string;
}

const half = (window.screen.width - 20 * 3) / 2;

export default function WidgetTemplate({
  size,
  title,
  color,
  children,
  linkTo,
}: IProps) {
  return (
    <Link to={linkTo ? linkTo : "/"} style={{ width: "100%" }}>
      <Container size={size}>
        <Title>{title}</Title>
        <div>{children}</div>
      </Container>
    </Link>
  );
}

const Container = styled.div<IProps>`
  display: inline-block;
  background-color: #fff;
  border-radius: 7px;
  width: ${(props) => {
    switch (props.size) {
      case "lg":
        return "100%";
      case "md":
        return "100%";
      case "sm":
        return half + "px";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "lg":
        return "150px";
      case "md":
        return "50px";
      case "sm":
        return half + "px";
    }
  }};
  padding: 10px;
  overflow-y: hidden;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
`;
