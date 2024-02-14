import React, { useState } from 'react'

const Task = ({task,handleDelete,deletedTask,setDeletedTask,stopAlarm,handlePause}) => {
  const [muteClass,setMuteClass]  = useState('speaker-button')

  const handleSpeaker = ()=>{
    setMuteClass((initialClass => initialClass === 'speaker-button'? 'mute-button':'speaker-button'));
    stopAlarm();
  }

  return (
    <div className='task-details'>
      {task.taskName}

      <div className='due-time'>{task.dueTime}</div>
      
      <button className={muteClass} onClick={handlePause}><img className="speaker" src='icons/speaker.png'></img></button>
      <button className='task-delete-button' onClick={(e)=>handleDelete(task) }>&#10003;</button>
    </div>
    
    )
  } 

export default Task