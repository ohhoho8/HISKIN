import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Care = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Care Page</Text>
    </Container>
  );
};

export default Care;
