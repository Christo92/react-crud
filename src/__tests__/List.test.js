import React from 'react';
import { List } from '../components/List';
// Simulate Redux
import { shallow } from 'enzyme';
import { removeAllPersonAction } from '../actions/formActions';

describe('List test', () => {
    
    const props = {
        removeAllPersons: jest.fn(),
        allPersons: {
            formReducer: [
                {
                  id: '315ff540-9ee8-44d5-8d9c-ac964007981a',
                  firstName: 'Chris',
                  lastName: 'Hero',
                  isEditing: false
                },
                {
                  id: '565ff540-9ee8-44d5-8d9c-dbfgfgc96dfdfa',
                  firstName: 'Paul',
                  lastName: 'Allen',
                  isEditing: false
                 }
            ]
        }
    };

    const { formReducer } = props.allPersons;

    it('should display the list if persons are in props', () => {
        
        if(formReducer.length > 0) {
            const wrapper = shallow(<List {...props}/>);
            
            // Check that displayDiv exists
            expect(wrapper.find('.list-subtitle').length).toEqual(1);
            
            // Check that list-container div exists to
            expect(wrapper.find('.list-container').length).toEqual(1);

            // Check that 2 items exit
            expect(wrapper.find('.person-block').length).toEqual(2)
        }
    });

    it('should delete all item', () => {
        
        if(formReducer.length > 0) {
            const wrapper = shallow(<List {...props}/>);
            const removeAll = '.list-subtitle__removeAll';
            
            // Check that displayDiv exists
            expect(wrapper.find('.list-subtitle').length).toEqual(1);
            
            // Check that remove Button is here
            expect(wrapper.find(removeAll).length).toEqual(1);
            wrapper.find(removeAll).simulate('click');
            expect(props.removeAllPersons).toHaveBeenCalledTimes(1);
        }
    });
});