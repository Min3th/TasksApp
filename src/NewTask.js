import React, { useState } from 'react'


const NewTask = ({taskName,setTaskName,hours,setHours,minutes,setMinutes,taskTime,setTaskTime,handleTotalSubmit}) => {

  const [alarmClass,setAlarmClass] = useState('close-alarm');
  const [hourClass,setHourClass] = useState('hour-input-closed');
  const [minuteClass,setMinuteClass] = useState('minute-input-closed');
  const [openButton,setOpenButton] = useState('alarm-button');
  const handleAlarm =(e)=> {
      e.preventDefault();
      setAlarmClass((initialClass =>initialClass === 'close-alarm'? 'opened-alarm':'close-alarm'));
      setHourClass((initialClass =>initialClass === 'hour-input-closed'? 'hour-input-opened':'hour-input-closed'));
      setMinuteClass((initialClass =>initialClass === 'minute-input-closed'? 'minute-input-opened':'minute-input-closed'));
      setOpenButton((initialClass =>initialClass === 'alarm-button'? 'alarm-button-opened':'alarm-button'));
      
  }
  
  return (
    
    <main>
      <div className='task-div'>
        <form className='task-form' onSubmit={handleTotalSubmit}>
          <div className='input-div'>

            <label htmlFor='taskDetail'>
            </label>
            <div className='input-info-div'>
              <input
                className='task-input'
                id='taskDetail'
                type='text'
                placeholder='Add your task'
                required
                value={taskName}
                onChange={(e) =>setTaskName(e.target.value)}

              />

              <input
                className='duetime-input'
                id = "duetime"
                type = 'number'
                placeholder='Due time'
                value = {taskTime}
                onChange={(e) =>setTaskTime(e.target.value)}
              />

              <button onClick={handleAlarm} className={openButton}>Set Alarm</button>

              <div className={alarmClass}>
                <input
                  className={hourClass}
                  id ="hour-input"
                  type='number'
                  placeholder='Hours'
                  value={hours}
                  onChange={(e)=>setHours(e.target.value)}
                />
                <input
                  className={minuteClass}
                  id ="minutes-input"
                  type='number'
                  placeholder='minutes'
                  value={minutes}
                  onChange={(e)=>setMinutes(e.target.value)}
                />
              </div>
            </div>
            
            <div className='button-div'>
              <button className='enter-task-button' type='submit' onClick={()=>console.log('Did it submit?')}>+</button>
            </div>

            

          </div>
          
        </form>

      </div>
      
    </main>
  )
}

export default NewTask