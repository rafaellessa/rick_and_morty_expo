import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ItemImage, Title } from "./styles";

interface ListItemProps extends TouchableOpacityProps {
  title: string;
  urlPhoto: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, urlPhoto, ...rest }) => {
  return (
    <Container {...rest}>
      <ItemImage
        source={{
          uri: urlPhoto,
        }}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default ListItem;
