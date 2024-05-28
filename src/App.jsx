import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Modal from './components/Modal'
import TodoBoard from './components/TodoBoard'
import Todo from './components/Todo'
import './App.css'

function App() {
  /*const [status,setModal] = useState(false);
  const [number,change_num] = useState(0);  
  const switch_status = ()=>{
    setModal(!status)
  const plus_function = ()=>{
    change_num(number+1);
    console.log("increase 가 클릭됨");
  }
  const minus_function = () =>{
    change_num(number-1);
    console.log("decrease 가 클릭됨");
  }
  }
  return (
    <>
      <div className='title'>안녕하세요!</div>
      <div className='back_context'>내용내용내용</div>
      <div className='open'>
        <button onClick={switch_status}>버튼 열기</button>
      </div>
      {status&&(
          <Modal status={status} setModal={setModal} switch_status={switch_status}></Modal>
      )}
    </>
    <>


    <div className='count'>{number}</div>
    <button onClick={()=>change_num(number+1)}>+1</button>
    <button onClick={()=>change_num(number-1)}>-1</button>
    
    </>
  )*/
  const [data,setData] =useState('');
  const [todoList,settodoList] = useState([]);

  const handleChange = (e)=>{
    setData(e.target.value);
  };
  const handleEnter = (e)=>{
    if(e.key === "Enter" && data.trim() !== ''){
      handleSubmit();
    }
  };
  
  const handleSubmit = ()=>{
      const newTodo ={
        id : todoList.length+1,
        text : data,
        isDone : false,
      };
      settodoList([...todoList,newTodo]);
      setData('');
  };
  return (
    <>
    <div className='back'>
    <div className='title'>UMC Study Plan</div>
    <input 
    className = 'input'
    value = {data} 
    type="text" 
    placeholder='UMC 스터디 계획을 작성해보세요!'
    onChange={handleChange}
    onKeyDown={handleEnter}/>
      <TodoBoard todoList={todoList} settodoList={settodoList}/>
    </div>
    </>
  )
}

export default App