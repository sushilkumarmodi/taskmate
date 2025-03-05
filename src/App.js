import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useState } from 'react'
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);

  const handleSubmit = (event) => {
    event.preventDefault();    

    if(task){
      const date = new Date();
      setTasklist([...tasklist, {id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}]);
      setTask("");
    }
  }
  return (
    <div className="App">
      <Header/>
      <AddTask handleSubmit={handleSubmit} taskList={task} setTask={setTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist}/>
    </div>
  );
}

export default App;
