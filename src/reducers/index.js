import { combineReducers } from 'redux';
// Reducers
import { formReducer } from './formReducer';
import { personReducer } from './personReducer';

export default combineReducers({
    formReducer,
    personReducer
})