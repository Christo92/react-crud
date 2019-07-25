// Action Types
import { ADD_PERSON } from '../actions/actionTypes';

const initialState = {
    personList: [],
};

export function formReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            return {
                personList: [action.data, ...state.personList]
            };
        default:
            return state;
    }
}