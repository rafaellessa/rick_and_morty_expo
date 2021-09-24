import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const HeaderWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + 30}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowIconWrapper = styled.TouchableOpacity``;
export const ArrowIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LikeIconWrapper = styled.TouchableOpacity``;
export const LikeIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(30)}px;
`;

export const PhotoWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 15px;
`;

export const Photo = styled.Image`
  width: ${RFValue(224)}px;
  height: ${RFValue(224)}px;
`;

export const PersonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
`;

export const InfoWrapper = styled.View``;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
`;

export const SectionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
