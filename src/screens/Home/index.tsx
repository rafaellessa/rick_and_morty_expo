import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import { PersonActions } from "../../redux/reducers/reducer.persons";
import {
  getPersons,
  getPersonsMetadata,
} from "../../redux/selectors/selector.persons";

import { Container, ListHeader, ListWrapper, PersonList } from "./styles";

const Home: React.FC = () => {
  const persons = useSelector(getPersons);
  const { loading, error } = useSelector(getPersonsMetadata);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    dispatch(PersonActions.requestGetAllPersons({}));
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
              onPress={() => console.tron.log("clicou")}
            />
          )}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          onEndReachedThreshold={0.2}
          onEndReached={() => console.tron.log("Chegou no final")}
        />
      </ListWrapper>
    </Container>
  );

  const renderLoading = () => <Loading />;

  const validateRender = () => {
    if (loading) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Home;
