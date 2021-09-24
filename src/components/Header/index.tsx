import React from "react";
import Avatar from "../Avatar";
import {
  Container,
  ContentWrapper,
  UserGreeting,
  UserName,
  UserWrapper,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <UserWrapper>
          <UserName>Olá,</UserName>
          <UserGreeting>Seja bem vindo!</UserGreeting>
        </UserWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
