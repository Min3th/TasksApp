import React, { useState } from 'react'
import Feed from './Feed'
import { Link } from 'react-router-dom';
import FinishedFeed from './FinishedFeed';

const Home = ({tasks,handleDelete,deletedTasks,handleDeleteFinal,dueTime,stopAlarm,handlePause}) => {

  
    const initialState = false;
    const [displayMsg,setDisplayMsg] = useState(initialState);
    const [compDiv,setCompDiv] = useState('completed-button')
    const [finishDiv,setFinishDiv] = useState('finished-line')

    const handleClick = () =>{
      
      setCompDiv((initialClass => initialClass === 'completed-button' ? 'opened-button':'completed-button'));
      setFinishDiv((initialClass => initialClass === 'finished-line' ? 'finished-line-opened':'finished-line'));

      }

  

    

    return (
      
      <main className='home'>

        <div className='home-heading'>Tasks remaining</div>

        <div className='scrollable-tasks'>
          <div className='task-line'>
            {tasks.length ? (<Feed 
            tasks={tasks} 
            handleDelete={handleDelete} 
            dueTime = {dueTime}
            stopAlarm={stopAlarm} 
            handlePause = {handlePause}/>):<div className='empty-task'><div className='empty-words'>No tasks to display</div></div>}
          </div>
        </div>
        
        
        <div className={finishDiv}>
          {deletedTasks.length ? (<FinishedFeed deletedTasks={deletedTasks} handleDeleteFinal={handleDeleteFinal}/>):<div className='empty-task'><div className='empty-words'>No tasks to display</div></div>}
        </div>
        


        <button className={compDiv} onClick={handleClick}><p className='caret'>&#8248;</p><p className='button-text'>Completed Tasks</p></button>
        
        
        
        
        
        

        <div className='addtask-button-div'><Link className='addtask-button' to='/task'>+</Link></div>

       

        <Link className='addtask-button' to='/task'>+</Link>

      </main>
      
    )
  }


export default Home