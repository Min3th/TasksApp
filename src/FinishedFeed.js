import React from 'react'
import FinishedTask from './FinishedTask';

const FinishedFeed = ({deletedTasks,handleDeleteFinal}) => {
  return (
    <div className='finishedline-div'>
      {deletedTasks.map(deletedTask => (
        <FinishedTask key={deletedTask.id} deletedTask = {deletedTask} handleDeleteFinal ={handleDeleteFinal} />
      ))}
    </div>
  )
}

export default FinishedFeed