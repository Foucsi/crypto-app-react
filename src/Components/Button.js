import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: radial-gradient(
    939px at 0.7% 2.4%,
    rgb(116, 106, 255) 0%,
    rgb(221, 221, 221) 100.2%
  );
  border: none;
  padding: 30px 40px;
  width: 95%;
  border-radius: 60px;
  color: #343f76;
  font-size: 1.5rem;
`;

function Button() {
  return <Container>GET STARTED</Container>;
}

export default Button;
