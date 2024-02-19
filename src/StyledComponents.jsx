/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 5px;
  color: #444;
  border: 1px solid #1890ff;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 100;
`;

const StyledComponents = () => (
  <Container>
    <Title>Et voici</Title>
  </Container>
);

export default StyledComponents;
