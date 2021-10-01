import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import {AddTodos} from './myComponents/AddTodos';
import {Todos} from './myComponents/todos';
import React , {useState ,useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo =[];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  function onDelete(todo){
    setTodos(todos.filter((e) => {
     return e !== todo;
    }))
    localStorage.setItem('todos' , JSON.stringify(todos)); 

  }
  let addTodos = (title , desc) => {
    let sno;
   if(todos.length === 0){
     sno=0;
   }else{
    sno = todos[todos.length -1].sno +1;
   }
    const myTodo = {
      title : title,
      desc : desc,
      sno:sno,
    }
    setTodos([...todos , myTodo]);

    
     
    }
  
  const [todos , setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos)); 
  },[todos])
  return (
    <>
    <Header searchBar={false}/>
    <AddTodos addTodos = {addTodos} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
