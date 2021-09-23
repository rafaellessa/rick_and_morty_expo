import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  PersonActionTypes,
  PersonState,
  ReducerTypes,
  CreatorTypes,
} from '../types/types.person';
import {AppReducers} from '../types/types.redux';

const {Types, Creators} = createActions<PersonActionTypes, CreatorTypes>(
  {
    requestGetAllPersons: ['data'],
    successGetAllPersons: ['persons'],
    failureGetAllPersons: ['error'],
    reset: null,
  },
  {
    prefix: `${AppReducers.root}/${AppReducers.persons}`,
  },
);

const INITIAL_STATE: PersonState = Immutable({
  persons: [],
  loading: false,
  error: null,
});

export const reducer = createReducer<PersonState, ReducerTypes>(INITIAL_STATE, {
  [Types.REQUEST_GET_ALL_PERSONS]: state => {
    return state.merge({
      loading: true,
      error: null,
    });
  },
  [Types.SUCCESS_GET_ALL_PERSONS]: (state, action) => {
    return state.merge({
      loading: false,
      persons: action.persons,
      error: null,
    });
  },
  [Types.FAILURE_GET_ALL_PERSONS]: (state, action) => {
    return state.merge({
      loading: false,
      error: action.error,
    });
  },
  [Types.RESET]: () => INITIAL_STATE,
});

export const PersonActions = Creators;
export const PersonTypes = Types;
