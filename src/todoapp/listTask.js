import React from 'react'

const ListTask = ({tasks,index,removeTask}) => {
  return (
    <div>
        <div className='list-tasks'>
            {tasks.title}
            <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
        </div>
    </div>
  )
}

export default ListTask