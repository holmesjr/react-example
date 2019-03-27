import { call, put, takeEvery } from 'redux-saga/effects'
import qs from 'qs';
import * as axios from "axios";

//the watcher saga
export default function* watchForShowSaga() {
    yield takeEvery('BUTTON_CLICKED', doShow)
}


// the async action
export function* doShow() {

    yield call(logStart);

    yield put(show());

    const token = yield call(authenticatePost);

    const dataResponse = yield call(dataGet, token.data);

    yield call(() => console.log(dataResponse));
}

export const logStart = () => console.log("Starting the saga");

export const authenticatePost = () => {
    return () => axios({
        method: 'post',
        url: 'https://localhost:8443/authenticate',
        data: qs.stringify({
            username: 'bob',
            password: 'bobspassword'
        }),
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    });
};

export const dataGet = (tokenString) => axios({
    method: 'get',
    url: 'https://localhost:8443/',
    headers: {
        "Authorization": "Bearer " + tokenString
    }
});

// the action creator
const show = () => {
    return { type: 'SHOW' }
};