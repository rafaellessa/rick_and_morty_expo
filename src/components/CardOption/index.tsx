import React from "react";
import { Container, Title } from "./styles";

interface CardOptionProps {
  title: string;
  selected?: boolean;
}

const CardOption: React.FC<CardOptionProps> = ({ title, selected }) => {
  return (
    <Container selected={selected}>
      <Title selected={selected}>{title}</Title>
    </Container>
  );
};

export default CardOption;
