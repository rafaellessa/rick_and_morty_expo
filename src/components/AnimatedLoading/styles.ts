import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Lottie from "lottie-react-native";
import AnimatedLottie from "../../assets/loading.json";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Load = styled(Lottie).attrs({
  source: AnimatedLottie,
})`
  background-color: transparent;
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
`;
