// @flow

import {
    take,
    put,
    call,
    fork,
    all,
    select
  } from 'redux-saga/effects';
import {
    SEACH_REQUEST
} from './actions';
import {
    searchActionCreators
} from './actions';
import {
    SEARCH_SERVICE,
    SEARCH_API
  } from 'RepServices';

function* asyncSearch({ payload, resolve, reject }) {
    try {
        const response = yield call(SEARCH_SERVICE, { api: SEARCH_API, params: payload });
        if (response.success) {
            // yield put(searchActionCreators.searchSuccess(response));
            resolve(response);
        } else {
            reject(response);
        }
    } catch (e) {
        reject(e);
    }
}

export function* watchSearch() {
    while (true) {
      const action = yield take(SEACH_REQUEST);
      yield* asyncSearch(action);
    }
}

export default function* () {
    yield all([
      fork(watchSearch)
    ]);
}
