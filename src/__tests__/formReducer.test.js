import reducer from '../reducers/formReducer';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/formActions';

describe('formReducer tests', () => {

    it('should handle ADD_PERSON', () => {
        const state = [];
        const data = {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"};

        expect(reducer(state, actions.addPersonAction(data))).toEqual([data]);

    });

    it('should handle REMOVE_PERSON', () => {
        const data = {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"};
        const actionId = {"id": 2}
        const state = [data];

        let personId = state.map(value => value.id)
        let resultId = Number(personId);

        if (resultId !== actionId.id) {
            expect(reducer(state, actions.removePersonAction(data.id))).toEqual([]);
        }

    });

    it('should handle REMOVE_ALL', () => {
        const data = {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"};
        const state = [data];

        expect(reducer(state, actions.removeAllPersonAction())).toEqual([]);

    });

    it('should handle EDIT_PERSON', () => {
        const data = {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"};
        const actionId = {"id": 1}
        const state = [data];

        let personId = state.map(value => value.id)
        let resultId = Number(personId);
        
        if (resultId === actionId.id) {
            data.isEditing = true;

            expect(reducer(personId, actions.editPersonAction(resultId))).toEqual([actionId.id]);
        }
    });

    it('should handle UPDATE_PERSON', () => {
        const actionId = {"id": 1}
        let data = {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"};
        data.isEditing = true;
        let state = [data];

        // Let's map on the state and change value
        let dataChange = {"firstName": "Chris", "id": 1, "isEditing": false, "lastName": "Hero"};

        let personId = state.map(value => value.id);
        let resultId = Number(personId);

        // Simulate change
        if (resultId === actionId.id) { 
            dataChange = data;
            expect(reducer(state, actions.updatePersonAction(personId, data))).toEqual([dataChange])
        }
    });
});