// Action Types
import { ADD_PERSON, REMOVE_PERSON, REMOVE_ALL, EDIT_PERSON, UPDATE_PERSON } from '../actions/actionTypes';

export function formReducer(state = [], action) {
    switch(action.type) {
        case ADD_PERSON:
            // We update the array without to mutate
            return state.concat([action.data]);

        case REMOVE_PERSON:
            // Deleting of person with filter to avoid to mutate
            return state.filter(person => {
                return person.id !== action.id
            });

        case REMOVE_ALL:
            // Deleting all person
            return state.filter(person => 0)

        case EDIT_PERSON:
            // We compare the id
            return state.map(person => person.id === action.id ? {
                ...person, isEditing: !person.isEditing
            } : person);

        case UPDATE_PERSON:
            return state.map((person) => {
                if (person.id === action.id) {
                    return {
                        ...person,
                        firstName: action.data.updateFirstName,
                        lastName: action.data.updateLastName,
                        isEditing: !person.isEditing
                    }
                } else {
                    return person
                }

            })

        default:
            return state;
    }
}