import React from 'react'
import FinishedFeed from './FinishedFeed';

const Completed = ({deletedTasks,handleDeleteFinal}) => {
  return (
    <main className='complete'>
      
      <div className='finished-line'>
        {deletedTasks.length ? (<FinishedFeed deletedTasks={deletedTasks} handleDeleteFinal ={handleDeleteFinal} />):<div className='empty-task'><div className='empty-words'>No tasks to display</div></div>}
      </div>
    </main>
  )
}

export default Completed