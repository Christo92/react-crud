// Actions Types
import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON } from './actionTypes';

export function addPersonAction(data) {
    return {
        type: ADD_PERSON,
        data
    }
};

export function removePerson() {
    return {
        type: REMOVE_PERSON
    }
};

export function editPerson(id) {
    return {
        type: EDIT_PERSON,
        id
    }
};


