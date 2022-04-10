import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const api = `https://jsonplaceholder.typicode.com/todos`;
export default function Users() {
   const [todos, setTodos] = useState();


   useEffect(() => {
     fetch(api)
     .then((response) => response.json())
     .then((api_todos) => setTodos(api_todos))
     .catch((e) => console.log(e));
   }, []);
    
  return (
    <>
        <ul className='users'>
            {
            todos &&
                todos.slice(0,5).map(({userId,title}) => 
                <li key={userId}>{title}</li>)
            }
        </ul>
    </>
  )
}
