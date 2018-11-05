// @flow

import { fork, all } from 'redux-saga/effects';
import {
    searchSaga
} from '../modules';


export default function* rootSaga() {
    yield all([
        fork(searchSaga)
    ]);
}
