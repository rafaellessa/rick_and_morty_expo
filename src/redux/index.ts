import {all} from '@redux-saga/core/effects';
import {Reducer} from 'react';
import {combineReducers} from 'redux';
import {reducer as reducerPersons} from './reducers/reducer.persons';
import {AppReducers} from './types/types.redux';
import sagasPerson from './sagas/sagas.persons';

const rootReducers = combineReducers({
  [AppReducers.persons]: reducerPersons,
});

export const rootSagas = function* rootSagas(): Generator {
  return yield all([sagasPerson()]);
};

interface AppRedux {
  saga: () => void;
  reducer: Reducer<any, any>;
}

const redux: AppRedux = {
  saga: rootSagas,
  reducer: rootReducers,
};

export default redux;
