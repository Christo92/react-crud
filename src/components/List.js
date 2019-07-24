import React from 'react';
// Uuid
import Uuid from 'uuid/v4';
// Components
import Person from '../containers/Person';

const List = (props) => {

    // Let's destructuring
    let { personList, removePerson } = props;

    return (
        <div>
            {
                personList.map(person => (
                    <Person 
                        key={Uuid()} 
                        person={person} 
                        personList={personList} 
                        removePerson={removePerson}
                    />
                    ) 
                )
            }
        </div>
    )
}

export default List;