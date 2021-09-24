import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(153)}px;
  height: ${RFValue(160)}px;
  border-radius: 10px;
  align-items: center;
  margin-right: 18px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(12)}px;
`;
