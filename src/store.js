import { createStore } from 'redux';
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
};

export const UPDATE_STEP1 = 'UPDATE_STEP1'
export const UPDATE_STEP2 = 'UPDATE_STEP2'
export const UPDATE_STEP3 = 'UPDATE_STEP3'
export const INIT_STATE = 'INIT_STATE'

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_STEP1:
            return {
                ...state,
                ...payload
            }
        case UPDATE_STEP2:
            return {
                ...state,
                ...payload
            }
        case UPDATE_STEP3:
            return {
                ...state,
                ...payload
            }
        case INIT_STATE:
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0
            }

        default: return state;
    }

}

export default createStore(reducer);