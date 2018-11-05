// @flow

import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

export const SEACH_REQUEST = 'search/repositories';
export const SEACH_REQUEST_SUCCESS = 'search/repositories_success';

export const searchActionCreators = {
    search: createPromiseAction(SEACH_REQUEST),
    searchSuccess: createAction(SEACH_REQUEST_SUCCESS)
}
