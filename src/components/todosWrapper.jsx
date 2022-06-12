import { useState } from "react";
import Task from "./task";
import CompletedTask from "./completedTask";
import Dashboard from "./dashboard";
import NewTask from "./newTask";

const TodosWrapper = () => {
  const [data, setData] = useState({ value: '', active: []});
  const buttons = [
    {id:1, className: 'button all', text: 'All'},
    {id:2, className: 'button active', text: 'Active'},
    {id:3, className: 'button completed', text: 'Completed'}
  ];
  // const [activeTasks, setActiveTasks] = useState([]);
  //const [completeTasks, setCompleteTasks] = useState([]);
  const hanleChange = ({ target }) => {
    console.log(target.value);
    setData({ 
      ...data,
      value: target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      value: '',
      active: [...data.active, { id: Date.now(), name: data.value, completed: false}]
    });
    //setActiveTasks([...activeTasks, data.value]);
    console.log('data', data);
  };

  const toggleComplete = (id) => {
    const completedTasks = data.active.map(task => {
      if(task.id === id) {
        if(!task.completed) {
          return {...task, completed: true}
        } else {
          return {...task, completed: false}
        }
      }
      return {...task}
    });
    setData({
      ...data,
      active: [...completedTasks]
    })
  };

  const handleCategoryChoose = (className) => {
    if(className.includes('active')) {
      console.log('active', className);
    } else if(className.includes('completed')) {
      console.log('completed', className);
    } else if(className.includes('all')) {
      console.log('all', className);
    }
  };

  return ( 
    <div className='container todo-wrapper shadow-lg p-3 mb-5 bg-body rounded align-middle bg-secondary'>
      <h1 className='todo-header'>todos</h1>
      <NewTask 
        value={data.value}
        onNewTaskChange={hanleChange}
        onHandleSubmit={handleSubmit} 
      />
      {data.active.length > 0 ?
        data.active.map((activeTask, index) => <Task 
          key={index}
          task={activeTask}
          onTaskChangeClick={toggleComplete}
        />) :
        null}
      <Dashboard
        count={data.active.length}
        buttons={buttons}
        onChooseCategoryTask={handleCategoryChoose}
      />
    </div>
  );
};
 
export default TodosWrapper;