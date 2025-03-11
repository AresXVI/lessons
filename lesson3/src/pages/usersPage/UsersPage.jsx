import React from 'react'
import User from '../../components/user/User'

const namesObject = [
    {
        id: '123',
        name: 'Ares',
        age: 17,
    },
    {
        id: '234',
        name: 'Zeus',
        age: 36,
    },
    {
        id: '345',
        name: 'Aid',
        age: 33,
    },
    {
        id: '456',
        name: 'Poseidon',
        age: 25,
    }
]
function UsersPage() {
    return (
        <div>
        <h2>Users</h2>
        <ul>
            {/* {names.map((element, index) => <li key={index}>{element}</li>)} */}

            {namesObject.map(element => <User key={element.id} info={element} />)}
        </ul>
    </div>
)
}

export default UsersPage