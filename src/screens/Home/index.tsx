import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import theme from "../../global/theme";
import { PersonActions } from "../../redux/reducers/reducer.persons";
import {
  getPersons,
  getPersonsMetadata,
} from "../../redux/selectors/selector.persons";
import { Container, ListHeader, ListWrapper, PersonList } from "./styles";

const Home: React.FC = () => {
  const [page, setPage] = useState(0);

  const [load, setLoad] = useState(true);
  const persons = useSelector(getPersons);
  const { loading } = useSelector(getPersonsMetadata);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchPersons();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (persons.length > 0) {
        setLoad(false);
      }
    }, 2000);
  }, [persons]);

  const handleRefetch = () => {
    setPage(0);
    fetchPersons();
  };

  const fetchPersons = (offset?: number) => {
    if (offset && offset > 1) {
      dispatch(PersonActions.requestGetAllPersons({ offset }));
    } else {
      dispatch(PersonActions.requestGetAllPersons({}));
    }
  };

  const handleEndReachedList = () => {
    if (!loading) {
      fetchPersons(page + 1);
      setPage(page + 1);
    }
  };

  const renderContent = () => (
    <Container>
      <Header />
      <ListWrapper>
        <ListHeader>Personagens</ListHeader>
        <PersonList
          data={persons}
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
          onEndReached={() => {
            if (!loading) {
              fetchPersons(page + 1);
              setPage(page + 1);
            }
          }}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      </ListWrapper>
    </Container>
  );

  const renderLoading = () => <Loading />;

  const validateRender = () => {
    if (load) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Home;
