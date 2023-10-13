import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Challenge = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Challenge Page</Text>
    </Container>
  );
};

export default Challenge;
