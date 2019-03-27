import { call, put, takeEvery } from 'redux-saga/effects'
import watchForShowSaga, {authenticatePost, dataGet, doShow, logStart} from './saga';

describe('The watcher saga', () => {
    const gen = watchForShowSaga();

    it('watches for BUTTON_CLICKED events', () => {
        expect(gen.next().value).toEqual(takeEvery('BUTTON_CLICKED', doShow))
    });
});

describe('The doShow saga', () => {

    let gen;

    beforeEach(() => {
        gen = doShow();
    });


    it('logs that it is starting', () => {
        const effect = gen.next().value;
        expect(effect).toEqual(call(logStart));
    });

    it('emits a show event', () => {
        gen.next();
        const effect = gen.next().value;
        expect(effect).toEqual(put({ type: 'SHOW' }));
    });

    it('logs in', () => {
        gen.next();
        gen.next();
        const effect = gen.next().value;
        expect(effect).toEqual(call(authenticatePost));
    });

    it('gets data', () => {

        gen.next();
        gen.next();
        gen.next();
        const effect = gen.next({ data: "SOMETOKEN"}).value;
        expect(effect).toEqual(call(dataGet, "SOMETOKEN"));
    });

});
