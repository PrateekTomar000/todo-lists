import './App.css';
import Header from './mycomponents/Header';
import { Todos } from "./mycomponents/Todos";
import Footer from './mycomponents/Footer';
import React, {useState} from 'react';
import { AddTodo } from './mycomponents/AddTodo';
import { useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null) {
     initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
   

  const onDelete = (todo)=> {
    console.log('i am on delete of todo',todo);

    setTodo(todos.filter((e)=> {
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));  
  }

  const addTodo = (title, desc) => {
      console.log("i am adding todo", title, desc);
      let sno;
      if(todos.length===0) {
        sno = 1;
      }
      else {
      sno = todos[todos.length-1].sno + 1;
      }
      const mytodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodo([...todos, mytodo]);
      console.log(mytodo);   
  }
  const [todos, setTodo ] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
     <Header title ="My Todos list" searchBar ={false} />
     <AddTodo addTodo={addTodo} />
     <Todos todos={todos} onDelete={onDelete} />
     <Footer/>
    </>
    
  );
}

export default App;
