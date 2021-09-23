import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Logo from "../../assets/rick.svg";
import { Container } from "./styles";

const Splash: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home", {});
    }, 5000);
  }, []);
  return (
    <Container>
      <Logo width={RFPercentage(45)} />
    </Container>
  );
};

export default Splash;
