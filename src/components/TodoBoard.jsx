import React from "react"
import Todo from "./Todo"
import './TodoBoard.css'

function TodoBoard({todoList , settodoList}){
    function makeDone(id){
        const updatedTodoList = todoList.map((todo)=>{
            if(todo.id == id){
                return {...todo,isDone:true};
            }
            return todo;
        })
        settodoList(updatedTodoList);
    }
    function deleteTodo(id){
        settodoList(todoList.filter((todo)=> todo.id !== id));
    }
    return(
        <div className="workWrapper">
        <div className='workTodo'>
            <h3>해야 할 일</h3>
            <div>
                {todoList
                .filter((todo)=>!todo.isDone)
                .map((todo)=>(
                    <Todo
                    key={todo.id}
                    {...todo}
                    makeDone={()=>makeDone(todo.id)}
                    />
                ))}
            </div>
        </div>
        <div className='workDone'>
            <h3>해낸 일</h3>
            <div>
                {todoList
                .filter((todo)=>todo.isDone)
                .map((todo)=>(
                    <Todo
                    key={todo.id}
                    {...todo}
                    deleteTodo={()=>deleteTodo(todo.id)}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default TodoBoard
