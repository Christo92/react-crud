import React from 'react';
import { List } from '../components/List';
// Simulate Redux
import { shallow } from 'enzyme';

// Actions
import { removeAllPersonAction } from '../actions/formActions';
import reducedPersons from '../__fixtures__/reducedPersons';


describe('List test', () => {
    
    // const props = {
    //     removeAllPersons: jest.fn(),
    //     allPersons: [
    //         {"firstName": "Leon", "id": 1, "isEditing": false, "lastName": "Mars"},
    //         {"firstName": "Chris", "id": 2, "isEditing": false, "lastName": "Hero"}
    //     ]
    // };

    // let formReducer = props.allPersons.map(person => person);
    // console.log(formReducer);

    // if(formReducer.length > 0) {
    //     const wrapper = shallow(<List {...props}/>);
    //     console.log(true)

    // }


    // it('should show that component exists', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

    it('displays the list of persons when actions is called', () => {


    });
});