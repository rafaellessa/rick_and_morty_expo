import { Person } from "./../../redux/types/types.person";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  padding: 0 24px;
  margin: 10px 0;
`;

export const ListHeader = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  margin: 8px 0;
`;

export const ListWrapper = styled.View`
  padding: 0px 24px;

  flex: 1;
`;

export const PersonList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 80,
  },
})`` as unknown as typeof FlatList;

export const FooterWrapper = styled.View`
  height: ${getBottomSpace() + RFValue(70)}px;

  align-items: flex-end;
  padding: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;
