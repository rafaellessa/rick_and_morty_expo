import {ImmutableObject} from 'seamless-immutable';
import {PersonState} from './types.person';

export enum AppReducers {
  root = 'value',
  persons = 'persons',
}

export interface AppState {
  [AppReducers.persons]: PersonState;
}

export interface AppStateRoot {
  [AppReducers.root]: ImmutableObject<AppState>;
}
