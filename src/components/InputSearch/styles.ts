import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const IconSearch = styled(MaterialIcons).attrs({
  name: "search",
  size: 30,
})`
  color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.white,
}))`
  flex: 1;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
