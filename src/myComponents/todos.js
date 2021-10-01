import React from 'react'
import {TodosItem} from '../myComponents/todosItem';

export const Todos = (props) => {
    let myStyle = {
        minHeight : "40vh",
        margin: '40px auto',


    }
    return (
        <div className='container' style={myStyle}>
            <h3 >Todos List</h3>
            {props.todos.map((todo) =>{
                return(
                   
                     <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                  
           
                     )
            
            })}
           
        </div>
    )
}
