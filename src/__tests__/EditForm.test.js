import React from 'react';
import { shallow } from 'enzyme';

import { EditForm } from '../components/EditForm';

describe('EditForm test', () => {

    const props = {
        updatePerson: jest.fn(),
        person: [
            {
                firstName: 'Chris',
                lastName: 'Hero'
            }
        ]
    };

    const wrapper = shallow(<EditForm {...props}/>);

    it('should set text in input and update values', () => {
        // Let's find input in the dom
        const firstnameUpdateInput = wrapper.find('.editform-container__inputFirstName');
        const lastnameUpdateInput = wrapper.find('.editform-container__inputLastName');
        const submitButton = '.editform-container__updateButton';
        const inputUpdateValue = 'refs';

        // Check that input exist and Set value to firstName input
        expect(firstnameUpdateInput.length).toEqual(1);
        firstnameUpdateInput.simulate('focus');
        firstnameUpdateInput.simulate('change', { target: { value: 'Chris' } });

        // Check that input exist and Set value to lastName input
        expect(lastnameUpdateInput.length).toEqual(1);
        lastnameUpdateInput.simulate('focus');
        lastnameUpdateInput.simulate('change', { target: { value: 'Lone' } });

        // let's give instance to refs
        wrapper.instance()[inputUpdateValue] = {
            updateFirstName: {
                value: 'Chris'
            },
            updateLastName: {
                value: 'Lone'
            }
        };

        // Submit the button
        expect(wrapper.find(submitButton).length).toEqual(1);
        wrapper.find(submitButton).simulate('click');
        wrapper.find('.editform-container__form').simulate('submit', { preventDefault () {} });
        expect(props.updatePerson).toHaveBeenCalledTimes(1);
    });
});