import {Action} from 'redux';
import {ImmutableObject} from 'seamless-immutable';

export interface Person {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'masculino' | 'feminino';
  location: string;
  image: string;
  episode: Array<string>;
}

export interface PersonActionTypes {
  REQUEST_GET_ALL_PERSONS: string;
  SUCCESS_GET_ALL_PERSONS: string;
  FAILURE_GET_ALL_PERSONS: string;

  RESET: string;
}

export interface State {
  persons: Person[];
  loading: boolean;
  error: string | null;
}

export type PersonState = ImmutableObject<State>;
export interface RequestGetAllPersonsParams {
  offset?: number;
}
export interface RequestGetAllPersons extends Action<PersonActionTypes> {
  data?: RequestGetAllPersonsParams;
}

export interface SuccessGetAllPersons extends Action<PersonActionTypes> {
  persons: Person[];
}

export interface FailureGetAllPersons extends Action<PersonActionTypes> {
  error: string | null;
}

export interface CreatorTypes {
  requestGetAllPersons(data?: RequestGetAllPersonsParams): RequestGetAllPersons;
  successGetAllPersons(persons: Person[]): SuccessGetAllPersons;
  failureGetAllPersons(error: string | null): FailureGetAllPersons;
}

export type ReducerTypes = RequestGetAllPersons &
  SuccessGetAllPersons &
  FailureGetAllPersons;
