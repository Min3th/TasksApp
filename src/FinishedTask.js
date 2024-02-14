import React from 'react'

const FinishedTask = ({deletedTask,handleDeleteFinal}) => {
  return (
    <div className='finished-details'>
      {deletedTask.taskName}
      <button className='task-finaldelete-button' onClick={(e)=>handleDeleteFinal(deletedTask) }>&#10003;</button>
    </div>
  )
}

export default FinishedTask