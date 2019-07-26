// Actions Types
import { ADD_PERSON, REMOVE_PERSON, REMOVE_ALL, EDIT_PERSON, UPDATE_PERSON } from './actionTypes';

// Actions Creators
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

export function removeAllPersonAction() {
    return {
        type: REMOVE_ALL
    }
};

export function editPersonAction(id) {
    return {
        type: EDIT_PERSON,
        id
    }
};

export function updatePersonAction(id, data) {
    return {
        type: UPDATE_PERSON,
        id,
        data,
    }
};


