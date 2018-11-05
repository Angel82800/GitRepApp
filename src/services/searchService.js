import {
    HOST_URL
} from './constants';
import { set } from 'lodash';

export function SEARCH_SERVICE({ api, params }) {
    const headers = {};
    set(headers, 'Accept', 'application/json');
    set(headers, 'Content-Type', 'application/json');
    return fetch(`${api}`, {
        method: 'GET',
        headers
    }).then((response) => response.json());
}
