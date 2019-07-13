import React from 'react';
// Uuid
import Uuid from 'uuid/v4';
// Components
import Person from './Person';

const List = (props) => {

    let { personList } = props;

    return (
        <div>
            {
                personList.map(person => (
                    <Person 
                        key={Uuid()} 
                        person={person} 
                        personList={personList} 
                    />
                    ) 
                )
            }
        </div>
    )
}

export default List;