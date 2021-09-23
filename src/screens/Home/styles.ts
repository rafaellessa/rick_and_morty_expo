import { Person } from "./../../redux/types/types.person";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
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

export const PersonList = styled(FlatList as new () => FlatList<Person>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 80,
  },
})``;
