import {ADD_TASK, DELETE_TASK , TOGGLE ,EDIT,FILTER } from '../Actions/Types'


const initState = {

task: [
    {
      id: "1",
      description: "First Task",
      isDone : false
    },
    {
        id: "2",
        description: "Second Task",
        isDone : false
    },
    {
        id: "3",
        description: "Third Task",
        isDone : false
    },
    {
        id: "4",
        description: "Fourth Task",
        isDone : false
    },]

}
const TaskReducer = (state = initState , {type , payload})=>
{
    switch (type) {
        case  ADD_TASK :
            return {
                ...state , task : [...state.task
                ,payload] 
            }

        case  DELETE_TASK :
             return {
                 ...state , task : state.task.filter(elm => elm.id !== payload)   
             }
        case  TOGGLE :
             return {
                 ...state , task : state.task.map(elm =>elm.id ===payload ? {...elm,isDone:!elm.isDone} : elm )   
             }
        
        case  EDIT :
                return {
                 ...state , task : state.task.map(elm =>elm.id ===payload.id ? payload:  elm )    
                }
        case  FILTER :
                 return {
                 ...state , task : state.task.filter(elm =>elm.isDone === true)   }  
   default :  return state
   
    }






   
}
export default TaskReducer