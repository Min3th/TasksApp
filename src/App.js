import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import EditTask from "./EditTask";
import NewTask from "./NewTask";
import ViewTask from "./ViewTask";
import Missing from "./Missing";
import {Route,Routes,useNavigate} from 'react-router-dom';
import { useEffect,useState } from "react";
import {format, setHours, setMinutes} from "date-fns";
import Completed from "./Completed";
import sound from "./sounds/best_alarm.mp3";
import UserManual from "./UserManual";


function App() {

  const [audioElements, setAudioElements] = useState([]);

  const localStorageKey= "taskkey";
  const deletedLocalStorageKey = "deletetaskkey"
  const alarmLocalStorageKey = "alarmlistkey"

  const initialTasks =JSON.parse(localStorage.getItem(localStorageKey)
                                  || '[]')

  const [search,setSearch] = useState('');
  const [tasks,setTasks] = useState(initialTasks);



  const initialDeleteTasks =JSON.parse(localStorage.getItem(deletedLocalStorageKey) || '[]')
  const [deletedTasks,setDeletedTask] = useState(initialDeleteTasks);

  const [taskName,setTaskName] = useState('');
  const [taskTime,setTaskTime] = useState('');
  const [alarmTime,setAlarmTime] = useState('');
  const [dueTime,setDueTime] = useState('');

  


  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(tasks))

  },[tasks]);

  useEffect(()=>{
    localStorage.setItem(deletedLocalStorageKey ,JSON.stringify(deletedTasks))
  },[deletedTasks])

  
  const initialTimes = JSON.parse(localStorage.getItem(alarmLocalStorageKey) || '[]');
  const [alarmTimeList,setAlarmTimeList] = useState(initialTimes);

  useEffect(()=>{
    localStorage.setItem(alarmLocalStorageKey,JSON.stringify(alarmTimeList))
  },[alarmTimeList])


  const scheduleAlarms = (alarmTimeList) => {
    console.log('before alarm');
    console.log(alarmTimeList);
    alarmTimeList.forEach((alarmTime) => {
      console.log('alarms');
      const now = new Date();
      const [enteredHours,enteredMinutes] = alarmTime.split(':');

      const targetHours = parseInt(enteredHours,10) - now.getHours();
      const targetMinutes = parseInt(enteredMinutes,10) - now.getMinutes();
      const targetTime = (targetHours*60*60) + (targetMinutes*60);
      console.log(targetTime);
      if (targetTime>0){
        const indiAlarmOn = setTimeout(()=>{   
          const newAudioElement = createAudioElement(sound);
          newAudioElement.play();
          },targetTime*1000);
      }
    });
  };

  useEffect(() => {
    const savedAlarms = JSON.parse(localStorage.getItem(alarmLocalStorageKey) || '[]');
    scheduleAlarms(savedAlarms);
    console.log('hello');
  }, []);
  
  
  

  const addTask =async(taskName,taskTime,newAlarmTime)=> {
    const id = tasks.length? tasks[tasks.length-1].id+1: 1;
    const datetime = format(new Date(),'MMMM dd, yyyy pp');
    const myNewTask = {id,taskName:taskName,datetime,dueTime:taskTime,timeSet:alarmTime};
    const newAlarmList = [...alarmTimeList,newAlarmTime];
    const taskList = [...tasks,myNewTask];
    setAlarmTimeList(newAlarmList); 
    console.log('alarm list');
    console.log(alarmTimeList);
    setTasks(taskList);
    console.log(tasks);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!taskName) return;
    const newAlarmTime = `${hours}:${minutes}`;
    console.log(alarmTime);
    addTask(taskName,taskTime,newAlarmTime);
    setTaskName('');
    setTaskTime('');
    setAlarmTime('');
  }

  const handleDelete = async(completeTask)=>{
    const updatedList = tasks.filter(task=> task.id!==completeTask.id);
    setTasks(updatedList);
    const deletedList = [...deletedTasks,completeTask];
    setDeletedTask(deletedList);
  }
  const handleDeleteFinal = async(deleteTask)=>{
    const updatedDeleteList = deletedTasks.filter(deletedtask=> deletedtask.id!==deleteTask.id);
    setDeletedTask(updatedDeleteList);
  }
 

  const handleTotalSubmit = (e)=>{
    e.preventDefault();
    handleSubmit(e);
    handleTimeSubmit(e);
  }



  //alarm functionality

  const createAudioElement = (src)=>{
    const audio = new Audio(src);
    setAudioElements((prevAudioElements) => [...prevAudioElements, audio]);
    return audio;
  }

  const [hours,setHours] = useState('');
  const [minutes,setMinutes] = useState('');
  let activeTime = '';

  const alarm =(activeTime) =>{
    const now = new Date()
    
    const [enteredHours,enteredMinutes] = activeTime.split(':');

    const targetHours = parseInt(enteredHours,10) - now.getHours();
    const targetMinutes = parseInt(enteredMinutes,10) - now.getMinutes();
    const targetTime = (targetHours*60*60) + (targetMinutes*60);
    console.log(targetTime);

    if (targetTime>0){
      
      const indiAlarmOn = setTimeout(()=>{   
        const newAudioElement = createAudioElement(sound);
        newAudioElement.play();
       },targetTime*1000);
    }
    


    
  }
  
  const pauseAudio = (audio) => {
    audio.pause();
  };

  const handlePause = () => {
    audioElements.forEach((audio) => pauseAudio(audio));
  };

  const handleTimeSubmit = (e)=>{
    e.preventDefault();
    activeTime = `${hours}:${minutes}`
    alarm(activeTime);
  }



  return (
    <Routes>
      <Route path = "/" element = {<Layout search={search} setSearch = {setSearch}/>}>
        <Route index element = {<Home 
        tasks={tasks.filter(task =>(task.taskName).includes(search.toLowerCase()))}
        handleDelete={handleDelete} 
        deletedTasks={deletedTasks} 
        handleDeleteFinal ={handleDeleteFinal} 
        dueTime={dueTime}
        handlePause={handlePause}/>}/>
        <Route path = '/task'>
          <Route index element = {<NewTask 
          
          handleSubmit={handleSubmit}  
          setDeletedTask={setDeletedTask}
          hours={hours} 
          setHours={setHours} 
          minutes={minutes} 
          setMinutes={setMinutes} 
          
          taskTime={taskTime}
          taskName={taskName}
          setTaskTime={setTaskTime}
          setTaskName={setTaskName}
          handleTotalSubmit={handleTotalSubmit}
          />} />
          <Route path = ':id' element = {<ViewTask/>}/>
          <Route path = 'edit/:id' element = {<EditTask/>}/>
        </Route>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '*' element = {<Missing/>}/>
        <Route path = '/completeTask' element ={<Completed deletedTasks={deletedTasks}/>}/>
        <Route path = '/userManual' element = {<UserManual/>}/>
        

      </Route>
    </Routes>
  );
}

export default App;
