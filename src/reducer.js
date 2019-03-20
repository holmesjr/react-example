export const theApp = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return Object.assign({}, state, {
                shown: true
            });
        default:
            return state;
    }
};

const initialState = { shown : false };