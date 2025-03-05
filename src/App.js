import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [editid, setEditid] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(editid){
      const date = new Date();
      const selectedTask = tasklist.find(task => task.id === editid);
      const updateTask = tasklist.map((e) => (e.id === selectedTask.id ? (e = {id: e.id, name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: e.id, name: e.name, time: e.time}));
      setTasklist(updateTask);
      setEditid(0);
      setTask("");
      return;
    }

    if(task){
      const date = new Date();
      setTasklist([...tasklist, {id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}]);
      setTask();
      console.log(task);
    }
  }
  
  const handleEdit = (id) => {
    const selectedTask = tasklist.find(task => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  }

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header/>
      <AddTask handleSubmit={handleSubmit} editid={editid} taskList={task} setTask={setTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
