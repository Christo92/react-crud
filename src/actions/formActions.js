// Actions Types
import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON } from './actionTypes';

export function addPersonAction(data) {
    return {
        type: ADD_PERSON,
        data
    }
};

export function removePersonAction(id) {
    return {
        type: REMOVE_PERSON,
        id
    }
};

export function editPerson(id) {
    return {
        type: EDIT_PERSON,
        id
    }
};


