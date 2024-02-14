import React from 'react'

const userManual = () => {
  return (
    <div className='user-manual'>
      
      <div className='user-box'>
        <div className='user-welcome'>Welcome to</div>
        <img className='user-icon' src='icons/product-icon.png'/>
      </div>

      <div className='user-down'>⯆</div>

      
      <p className='user-normal'>This App provides you several functionalities as mentioned below</p>
      <p className='user-normal'>1.Press the <button className='user-plus'>+ </button>  icon in the homepage to add a task</p>
      <p className='user-normal'>2.In the add task page, you have 2 other options other than setting the task</p>
      <p className='due-manual'><span className='due'>Due Time</span>: set the time in which you want to do the task</p>

      <p className='user-normal'>Set Alarm: this allows you to set a small alarm, to remind you about the task at the time you desire</p>
      <p className='remain'>3.After adding the task, it will appear in the Tasks remaining section in the home page</p>
      <p className='user-normal'>With the task, the due time , mute button for the alarm, and the complete button is displayed</p>
      <p className='user-normal'>If you click the complete button , your task will appear in the hidden Complete Button section.You can click on it to view on all off your completed tasks</p>
      <p className='user-complete'>Once you hit the delete button in the completed task section, the task will be removed forever.</p>
      
      
    </div>
    
  )
}

export default userManual