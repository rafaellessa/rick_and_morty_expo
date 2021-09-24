import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface CardOptionStyledProps {
  selected?: boolean;
}

export const Container = styled.View<CardOptionStyledProps>`
  width: ${RFValue(96)}px;
  height: ${RFValue(43)}px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.white : theme.colors.secondary100};
  margin-bottom: 20px;
`;

export const Title = styled.Text<CardOptionStyledProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.secondary100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
