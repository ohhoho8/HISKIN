import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const UserLogin = () => {
  return (
    <Container>
      <Text style={{ fontSize: 30 }}>UserLogin</Text>
    </Container>
  );
};

export default UserLogin;
