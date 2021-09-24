import { useFocusEffect, useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AnimatedLoading from "../../components/AnimatedLoading";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import ListItem from "../../components/ListItem";
import theme from "../../global/theme";
import { useAddPersonFavorites } from "../../hooks/useAddPersonFavorites";
import { PersonActions } from "../../redux/reducers/reducer.persons";
import {
  getPersons,
  getPersonsMetadata,
} from "../../redux/selectors/selector.persons";
import { Person } from "../../redux/types/types.person";
import {
  Button,
  ButtonTitle,
  Container,
  FooterWrapper,
  InputWrapper,
  ListHeader,
  ListWrapper,
  PersonList,
} from "./styles";

const Home: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filteredPersons, setFilteredPersons] = useState<Person[]>([]);

  const { favorites, fetchFavorites } = useAddPersonFavorites();
  const [load, setLoad] = useState(true);
  const persons = useSelector(getPersons);
  const { loading } = useSelector(getPersonsMetadata);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchPersons();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites();
      return () => {};
    }, [])
  );

  useEffect(() => {
    handleToogleShowFavorites();
  }, [favorites]);

  useEffect(() => {
    setTimeout(() => {
      if (persons.length > 0) {
        setLoad(false);
      }
    }, 2000);
  }, [persons]);

  useEffect(() => {
    if (searchText.length >= 3) {
      handleParseFilteredPersons();
    }

    if (searchText.length === 0) {
      setFilteredPersons([]);
    }
  }, [searchText]);

  const handleToogleShowFavorites = () => {
    if (filteredPersons.length) {
      setFilteredPersons([]);
    } else {
      setFilteredPersons(favorites);
    }
  };

  const handleRefetch = () => {
    setPage(0);
    fetchPersons();
  };

  const handleParseFilteredPersons = () => {
    const filtered = persons.filter((person) =>
      person.name.match(new RegExp(searchText, "i"))
    );

    setFilteredPersons(filtered);
  };

  const fetchPersons = (offset?: number) => {
    if (offset && offset > 1) {
      dispatch(PersonActions.requestGetAllPersons({ offset }));
    } else {
      dispatch(PersonActions.requestGetAllPersons({}));
    }
  };

  const handleEndReachedList = () => {
    if (!loading && filteredPersons.length === 0) {
      fetchPersons(page + 1);
      setPage(page + 1);
    }
  };

  const renderContent = () => (
    <Container>
      <Header />
      <InputWrapper>
        <InputSearch
          onSearch={(text) => setSearchText(text)}
          search={searchText}
        />
      </InputWrapper>
      <ListWrapper>
        <ListHeader>Personagens</ListHeader>
        <PersonList
          data={filteredPersons.length ? filteredPersons : persons}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              urlPhoto={item.image}
              onPress={() => navigation.navigate("Details", { person: item })}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={handleRefetch}
              colors={[theme.colors.white]}
              tintColor={theme.colors.white}
            />
          }
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReachedList}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      </ListWrapper>
      <FooterWrapper>
        <Button onPress={handleToogleShowFavorites}>
          <ButtonTitle>Favoritos</ButtonTitle>
        </Button>
      </FooterWrapper>
    </Container>
  );

  const renderLoading = () => <AnimatedLoading />;

  const validateRender = () => {
    if (load) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Home;
