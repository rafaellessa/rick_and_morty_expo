import {call, put, takeLatest} from 'redux-saga/effects';
import PersonService from '../../data/services/Persons';
import {Person} from '../types/types.person';
import {PersonActions, PersonTypes} from './../reducers/reducer.persons';

function* getAllPersons() {
  try {
    const response: Person[] = yield call(PersonService.getPersons);

    yield put(PersonActions.successGetAllPersons(response));
  } catch (error) {
    yield put(PersonActions.failureGetAllPersons(String(error.message)));
  }
}

export default function* root() {
  yield takeLatest(PersonTypes.REQUEST_GET_ALL_PERSONS, getAllPersons);
}
