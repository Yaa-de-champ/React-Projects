import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB.jsx'
import { use } from 'react';


export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState('Nana Yaa');

    return (
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Helloo ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>           
        </div>
    );
}
export default ComponentA