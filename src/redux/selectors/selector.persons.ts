import {Person} from './../types/types.person';
import {AppReducers, AppState} from './../types/types.redux';
export const getPersons = (state: AppState): Person[] => {
  return state[AppReducers.persons].persons.asMutable({
    deep: true,
  });
};

export const getPersonsMetadata = (
  state: AppState,
): {loading: boolean; error: null | string} => {
  return {
    loading: state[AppReducers.persons].loading,
    error: state[AppReducers.persons].error,
  };
};
