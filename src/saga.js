import { put, takeEvery } from 'redux-saga/effects'

//the watcher saga
export default function* watchForShowSaga() {
    yield takeEvery('SHOW_ASYNC', doShow)
}

// the async action
export function* doShow() {
    yield put(show());
}

// the action creator
const show = () => {
    localStorage.setItem("shown", JSON.stringify(true));
    return { type: 'SHOW' }
};