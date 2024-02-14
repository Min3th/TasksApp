import React from 'react'
import Task from './Task'

const Feed = ({tasks,handleDelete,deletedTask,setDeletedTask,dueTime,stopAlarm,handlePause}) => {
  console.log(tasks);
  return (
    <div className='taskline-div'>
      {tasks.map(task => (
        <Task 
        key={task.id} 
        task = {task} 
        handleDelete={handleDelete} 
        deletedTask={deletedTask} 
        setDeletedTask={setDeletedTask}
        stopAlarm={stopAlarm}
        handlePause={handlePause}/>
      ))}
    </div>
  )
}

export default Feed