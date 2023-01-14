import React from 'react'
import Task from './Task'

function ListTask({aff}) {
  return (
    <div>
        {
          
            aff.map((el,i) =><Task el={el} key={i}></Task>)
        }
    </div>
  )
}

export default ListTask