import {ADD_TASK , DELETE_TASK , TOGGLE , EDIT ,FILTER} from './Types'
import { v4 as uuidv4 } from 'uuid';


export const add_task = (newTodo) =>  {
    return{
    type : ADD_TASK ,
    payload : {...newTodo , id : uuidv4() , isDone :false }
}

}
export const Remove_Task = (id) => {

    return{
        type : DELETE_TASK ,
        payload : id
    }
}

export const Toogle_Task = (id) => {

    return{
        type : TOGGLE ,
        payload : id
    }
}
export const Edit_Task = (task) => {

    return{
        type : EDIT ,
        payload : task
    }
}
export const Filter_Task = (task) => {

    return{
        type : FILTER ,
        payload : task
    }
}
