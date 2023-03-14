import React, {useState} from 'react';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList/UserList';
import NoTask from './Components/NoTask';
import './App.css'
function App() {
  const [addTask, setAddTask] = useState([]);
  const [counter, setCounter] = useState(0);
  

  const inputTask = (enteredText) => {
    setAddTask(prevTask => {
      const updatedTasks = [...prevTask]
      updatedTasks.unshift({text: enteredText, id: Math.random().toString()})
      return updatedTasks;
    })
    // const lineThrough = () =>{

    // }
    
  }
  let content = (<NoTask/>);
  if (addTask.length > 0){
    content = addTask.map((task) => 
      <UserList key={task.id} task={task} items={addTask} setItems={setAddTask} counter={counter} setCounter={setCounter} />
    );
  }
  return (
    <div className='app'>
      <AddUser counter={counter} setCounter={setCounter} onTask={inputTask} />
      <section>
      {content}
      </section>
    </div>
  );
}

export default App;
