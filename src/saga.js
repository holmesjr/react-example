import { call, put, takeEvery } from 'redux-saga/effects'
import qs from 'qs';
import * as axios from "axios";

//the watcher saga
export default function* watchForShowSaga() {
    yield takeEvery('SHOW_ASYNC', doShow)
}

// the async action
export function* doShow() {
    yield call(() => console.log("Starting the saga"));
    yield put(show());

    const token = yield call(() => axios({
        method: 'post',
        url: 'https://localhost:8443/authenticate',
        data: qs.stringify({
            username: 'bob',
            password: 'bobspassword'
        }),
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }));
    yield call(() => console.log(token.data));
}

// the action creator
const show = () => {
    return { type: 'SHOW' }
};