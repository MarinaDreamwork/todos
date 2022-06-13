import { useEffect, useState } from "react";
import Task from "./task";
import Dashboard from "./dashboard";
import NewTask from "./newTask";

const TodosWrapper = () => {
  const [data, setData] = useState({ value: '', all: []});
  const buttons = [
    {id:1, className: 'button all', text: 'All'},
    {id:2, className: 'button active', text: 'Active'},
    {id:3, className: 'button completed', text: 'Completed'}
  ];
  const [tasks, setTasks] = useState([]);
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
      all: [...data.all, { id: Date.now(), name: data.value, completed: false}]
    });
    setTasks(data.all);
  };

  const toggleComplete = (id) => {
    const completedTasks = data.all.map(task => {
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
      all: [...completedTasks]
    })
  };

  const handleCategoryChoose = (className) => {
    if(className.includes('active')) {
      const actives = data.all.filter(task => !task.completed);
      setTasks(actives);
    } else if(className.includes('completed')) {
      const actives = data.all.filter(task => task.completed);
      setTasks(actives);
    } else if(className.includes('all')) {
      setTasks(data.all);
    }
  };

  const handleDeleteComplete = () => {
    const active = data.all.filter(task => !task.completed);
    setData({
      ...data,
      all: active
    });
  };

  const renderTypeTasks = (arrayOfTasks) => {
    if(arrayOfTasks.length > 0) {
      return (
        <>
          { arrayOfTasks.map((activeTask, index) => <Task
              key={index}
              task={activeTask}
              onTaskChangeClick={toggleComplete}
            />)
          }
        </>
      )
    } else return <p className='d-flex justify-content-center font-italic'>No tasks yet</p>
  };

  const count = data.all.filter(task => !task.completed)?.length;

  useEffect(() => {
    setTasks(data.all);
  }, [data]);

  return ( 
    <div className='container todo-wrapper shadow-lg p-3 mb-5 bg-body rounded align-middle bg-secondary'>
      <h1 className='todo-header'>todos</h1>
      <NewTask 
        value={data.value}
        onNewTaskChange={hanleChange}
        onHandleSubmit={handleSubmit} 
      />
    {
      renderTypeTasks(tasks)
    }
      <Dashboard
        count={count}
        buttons={buttons}
        onChooseCategoryTask={handleCategoryChoose}
        onDeleteTask={handleDeleteComplete}
      />
    </div>
  );
};
 
export default TodosWrapper;