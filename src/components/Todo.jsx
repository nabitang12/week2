function Todo({id,isDone,text,makeDone,deleteTodo}){
    let button;
    if(isDone){
        button = <button onClick={()=>deleteTodo(id)}>삭제</button>;
    }
    else{
        button = <button onClick={()=>makeDone(id)}>완료</button>;
    }
    return(
        <div className="todo">
        <span className="text">{text}</span>
        {button}
        </div>
    )
}

export default Todo