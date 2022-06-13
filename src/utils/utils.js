import Task from "../components/task";

export const renderTypeTasks = (arrayOfTasks, func) => {
    if(arrayOfTasks.length > 0) {
      return (
        <>
          { arrayOfTasks.map((activeTask, index) => <Task
              key={index}
              task={activeTask}
              onTaskChangeClick={func}
            />)
          }
        </>
      )
    } else return <p className='notification d-flex justify-content-center m-1'>No tasks yet</p>
  };

  export const getTasks = (data, type) => {
    if (type === 'active') {
      return data.filter(task => !task.completed);
    } else if (type === 'completed') {
      return data.filter(task => task.completed);
    }
  };