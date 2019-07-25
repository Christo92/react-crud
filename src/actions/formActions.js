// Actions Types
import { ADD_PERSON } from './actionTypes';

export function addPersonAction(data) {
    return {
        type: ADD_PERSON,
        data
    }
};

