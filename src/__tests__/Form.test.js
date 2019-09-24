import React from 'react';
import { shallow } from 'enzyme';

import { Form } from '../components/Form';

describe('Form Test', () => {

    const props = {
        addPersonAction: jest.fn()
    }

    const wrapper = shallow(<Form {...props}/>);

    it('Set text in form input and submit', () => {
        // Let's find input in the dom
        const firstnameInput = wrapper.find('.form-container__inputFirstName');
        const lastnameInput = wrapper.find('.form-container__inputLastName');
        const submitButton = '.form-container__submit';
        const inputValue = 'refs';
        
        // Check that input exist and Set value to firstName input
        expect(firstnameInput.length).toEqual(1);
        firstnameInput.simulate('focus');
        firstnameInput.simulate('change', { target: { value: 'John' } });

        // Check that input exist and Set value to lastName input
        expect(lastnameInput.length).toEqual(1);
        lastnameInput.simulate('focus');
        lastnameInput.simulate('change', { target: { value: 'Pars' } });

        // expect(wrapper.ref('inputFirsName').innerText).to.equal('John');
        // expect(wrapper.ref('inputLastName').innerText).to.equal('Pars');

        // let's give instance to refs
        wrapper.instance()[inputValue] = {
            inputFirsName: {
                value: 'John'
            },
            inputLastName: {
                value: 'Pars'
            }
        };

        // Submit the button
        expect(wrapper.find(submitButton).length).toEqual(1);
        wrapper.find(submitButton).simulate('click');
        wrapper.find('.form-container__form').simulate('submit', { preventDefault () {} });
        expect(props.addPersonAction).toHaveBeenCalledTimes(1);
    });
});