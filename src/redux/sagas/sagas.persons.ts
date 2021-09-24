import { getPersons } from "./../selectors/selector.persons";
import { call, put, select, takeLatest } from "redux-saga/effects";
import PersonService from "../../data/services/Persons";
import { Person, RequestGetAllPersons } from "../types/types.person";
import { PersonActions, PersonTypes } from "./../reducers/reducer.persons";

function* getAllPersons({ data }: RequestGetAllPersons) {
  try {
    const offset = data.offset;

    const response: Person[] = yield call(PersonService.getPersons, { offset });

    if (offset) {
      const previousPersons = yield select(getPersons);
      const newPersons = [...previousPersons, ...response];
      yield put(PersonActions.successGetAllPersons(newPersons));
    } else {
      yield put(PersonActions.successGetAllPersons(response));
    }
  } catch (error) {
    yield put(PersonActions.failureGetAllPersons(String(error.message)));
  }
}

export default function* root() {
  yield takeLatest(PersonTypes.REQUEST_GET_ALL_PERSONS, getAllPersons);
}
