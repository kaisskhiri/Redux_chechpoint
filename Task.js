import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Remove_Task , Toogle_Task ,Edit_Task} from '../redux/Actions/TaskActions'
function Task({el}) {
  const [update,setUpdate] = useState(el)
  const dispatch = useDispatch()
  const Remve_ToDO =() =>{
    dispatch(Remove_Task(el.id))
}
const Toogle_ToDO =() =>{
  dispatch(Toogle_Task(el.id))
}
const Edit_Todo = () => {
  dispatch(Edit_Task(update))
}

  return (
    



    <div>
    <input type="checkbox" onChange={Toogle_ToDO}></input>
    <button onClick={Remve_ToDO} > Remove_Todo</button>
    <h2> { el.description } </h2>
    <input type="text" value={update.description} onChange={(e) => setUpdate({...update, description : e.target.value})}></input>
    <button onClick={Edit_Todo}> EDIT_Task</button>
    
    </div>
  )
}

export default Task