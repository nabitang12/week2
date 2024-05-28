import './Todo.css'

function Todo({id,isDone,text,makeDone,deleteTodo}){
    return(
        <div className='Container'>
        <div className="todo">
        <span className="text">{text}</span>
        {isDone?
        <button 
        className="button"
        onClick={()=>deleteTodo(id)}>삭제</button>
    :<button
    className="button" 
    onClick={()=>makeDone(id)}>완료</button>   
    }
        </div>
        </div>
    )
}

export default Todo