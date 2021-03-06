import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/theme";

export const Container = styled(LinearGradient).attrs({
  colors: [
    theme.colors.gradientPrimary,
    theme.colors.gradientSecondary,
    theme.colors.gradientTerciary,
  ],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
