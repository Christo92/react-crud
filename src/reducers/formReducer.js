// Action Types
import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON } from '../actions/actionTypes';

const initialState = {
    personList: [],
};

export function formReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            return {
                personList: [action.data, ...state.personList]
            };
        case REMOVE_PERSON:
            // Deleting of item with filter to avoid to mutate
            const newPersonList = state.personList.filter(person => {
                return person.id !== action.id
            });

            // After the deleting we update the state
            return {
                personList: newPersonList
            }
        case EDIT_PERSON:
            return {

            }
        default:
            return state;
    }
}