import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState,useReducer } from 'react';

function reducer(state,action){
  console.log(state,action)
  switch(action.type){
    case 'SET_TODO':
      return{
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return{
        ...state,
        todo:'',
        todos: [
          ...state.todos,
          action.todo
        ]
      }
  }

}

function App() {
  const [state,dispatch] = useReducer(reducer,{
    todos: [],
    todo: ''

  });
 const [todos, setTodos] = useState([])
 const [todo, setTodo] = useState()

 const submitHandle = e=>{
  e.preventDefault()
  //setTodos([...todos, todo])
 // setTodo('')
 dispatch({
  type:'ADD_TODO',
  todo: state.todo
 })
 }

 const onChange = e=>{
  dispatch({
    type: 'SET_TODO',
    value: e.target.value
  })
 }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type='text' value={state.todo} onChange={onChange}/>
        <button disabled={!state.todo} type='submit'>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo,index)=>(
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
