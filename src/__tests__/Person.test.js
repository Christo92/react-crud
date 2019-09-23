import React from 'react';
import { Person } from '../components/Person';
import { shallow } from 'enzyme';

describe('Person test', () => {
    
    const props = {
        removePerson: jest.fn(),
        editPerson: jest.fn(),
        person: [
            {
                firstName: 'Chris',
                lastName: 'Hero'
            }
        ]
    }

    const wrapper = shallow(<Person {...props}/>);

    it('should show that props exist', () => {
        expect(wrapper).toMatchSnapshot();
    });


    it('handle the edit button', () => {
        const editButton = '.person-container_edit';

        // Check that edit button exists
        expect(wrapper.find(editButton).length).toEqual(1);
        wrapper.find(editButton).simulate('click');
    });

    it('handle the remove button', () => {
        const removeButton = '.person-container_remove';

        // Check that remove button exists
        expect(wrapper.find(removeButton).length).toEqual(1);
        wrapper.find(removeButton).simulate('click');

    });
});