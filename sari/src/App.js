import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState,useReducer,useCallback } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

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
  const [count,setCount] = useState(0)
  const [state,dispatch] = useReducer(reducer,{
    todos: [],
    todo: ''

  });
 //const [todos, setTodos] = useState([])
 //const [todo, setTodo] = useState()
 

 const submitHandle = useCallback(e=>{
  e.preventDefault()
  //setTodos([...todos, todo])
 // setTodo('')
 dispatch({
  type:'ADD_TODO',
  todo: state.todo
 })
 },[])

 const onChange = useCallback(e=>{
  dispatch({
    type: 'SET_TODO',
    value: e.target.value
  })
 })

  return (
    <>
    <Header/>
    <h3>{count}</h3>
      <button onClick={()=>setCount(count=>count+1)}>Arttır</button>
      <hr/>
      <h1>Todo App</h1>
      
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
      <Todos todos={state.todos}/>
    </>
  );
}

export default App;
