// Action Types
import { REMOVE_PERSON, EDIT_PERSON, FIRSTNAME_UPDATE, LASTNAME_UPDATE } from './actionTypes';

// Actions Creators
export function removePerson() {
    return {
        type: REMOVE_PERSON
    }
};

export function editPerson() {
    return {
        type: EDIT_PERSON
    }
};

export function updateFirstName() {
    return {
        type: FIRSTNAME_UPDATE
    }
};

export function updateLastName() {
    return {
        type: LASTNAME_UPDATE
    }
};