import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CardOption from "../../components/CardOption";
import { Person } from "../../redux/types/types.person";
import {
  Container,
  HeaderWrapper,
  ArrowIcon,
  Title,
  LikeIcon,
  Photo,
  PersonName,
  InfoWrapper,
  SectionTitle,
  ArrowIconWrapper,
  LikeIconWrapper,
  PhotoWrapper,
  SectionWrapper,
} from "./styles";

const Details: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const person = routes.params.person as Person;

  console.tron.log("Person: ", person);

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <HeaderWrapper>
        <ArrowIconWrapper onPress={handleNavigationBack}>
          <ArrowIcon name="arrow-back" />
        </ArrowIconWrapper>
        <Title>Detalhes</Title>
        <LikeIconWrapper>
          <LikeIcon name="favorite-border" />
        </LikeIconWrapper>
      </HeaderWrapper>
      <PhotoWrapper>
        <Photo
          source={{
            uri: person.image,
          }}
        />
        <PersonName>{person.name}</PersonName>
      </PhotoWrapper>
      <InfoWrapper>
        <SectionTitle>Status</SectionTitle>
        <SectionWrapper>
          <CardOption title="Vivo" selected={person.status === "vivo"} />
          <CardOption title="Morto" selected={person.status === "morto"} />
          <CardOption
            title="Desconhecido"
            selected={person.status === "desconhecido"}
          />
        </SectionWrapper>
        <SectionTitle>Gênero</SectionTitle>
        <SectionWrapper>
          <CardOption
            title="Masculino"
            selected={person.gender === "masculino"}
          />
          <CardOption
            title="Feminino"
            selected={person.gender === "feminino"}
          />
          <CardOption title="Desconhecido" />
        </SectionWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default Details;