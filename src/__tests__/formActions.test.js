import * as actions from '../actions/formActions';
import * as types from '../actions/actionTypes';

describe('actions test', () => {

    it('should add new person on the list', () => {
        const data = { firstname: 'Chris', lastname: 'hero'};
        const addPerson = {
            type: types.ADD_PERSON,
            data
        };

        expect(actions.addPersonAction(data)).toEqual(addPerson);

    });

    it('should remove a person from list', () => {
        const id = '345';
        const removePerson = {
            type: types.REMOVE_PERSON,
            id
        };

        expect(actions.removePersonAction(id)).toEqual(removePerson);
    });

    it('should remove alls persons from list', () => {
        const removeAllPerson = {
            type: types.REMOVE_ALL
        };

        expect(actions.removeAllPersonAction()).toEqual(removeAllPerson);
    });

    it('should edit a person', () => {
        const id = '45';

        const editPerson = {
            type: types.EDIT_PERSON,
            id
        };

        expect(actions.editPersonAction(id)).toEqual(editPerson);
    });

    it('should update a person after editing', () => {
        const id = '18';
        const data = { firsname: 'Clark', lastname: 'Kent' };
        const updatePerson = {
            type: types.UPDATE_PERSON,
            id,
            data
        }

        expect(actions.updatePersonAction(id, data)).toEqual(updatePerson)
    });
});