import React from 'react';
import { Provider } from 'redux';
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import Form from '../components/Form';
import formReducer from '../reducers/formReducer';

const mockStore = configureMockStore();

describe('Form Test', () => {

    it('Set text in form input and submit', () => {
        
        // const formComponent = renderer.create(
        //     <Provider store={mockStore}>
        //         <Form />
        //     </Provider>
        // )

        // const props = {
        //     addPersonAction: jest.fn()
        // }

        // const formComponent = shallow(<Form {...props}/>);
        // const credentials = { firstname: 'Christopher', lastname: 'Loubassou' };

        // const firstnameInput = formComponent.find('.form-container__inputFirstName');
        // firstnameInput.value = credentials.firstname;

        // const lastnameInput = formComponent.find('.form-container__inputLastName');
        // lastnameInput.value= credentials.lastname;

        //console.log(formComponent.debug());

        // Remplir les deux champs 
        // Firstname et lastname
        // simulate click on submit button
        // 
    });


});