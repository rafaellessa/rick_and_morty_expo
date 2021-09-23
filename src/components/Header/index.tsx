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
        <Avatar url="https://github.com/rafaellessa.png" />
        <UserWrapper>
          <UserName>Olá, Rafael</UserName>
          <UserGreeting>Seja bem vindo!</UserGreeting>
        </UserWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
