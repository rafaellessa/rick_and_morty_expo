import React from "react";
import { Container, Load } from "./styles";

const AnimatedLoading: React.FC = () => {
  return (
    <Container>
      <Load autoPlay loop />
    </Container>
  );
};

export default AnimatedLoading;
