import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/rick.svg";
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
        <Logo width={RFValue(100)} height={RFValue(30)} />
      </ContentWrapper>
    </Container>
  );
};

export default Header;
