import { IButtonType } from 'types/button.interface';
import { ITask } from 'types/task.interface';
import { Type } from 'types/type';
import Task from "../components/task";

export const renderTypeTasks = (arrayOfTasks: ITask[] | undefined, func: (id: IButtonType['id']) => void) => {
  if (arrayOfTasks && arrayOfTasks.length > 0) {
    return (
      <>
        {arrayOfTasks.map((activeTask, index) => <Task
          key={index}
          task={activeTask}
          onTaskChangeClick={func}
        />)
        }
      </>
    )
  } else return <p className='notification d-flex justify-content-center m-1'>No tasks yet</p>
};

export const getTasks = (data: ITask[], type: Type) => {
  if (type === 'active') {
    if (data) {
      return data.filter(task => !task.completed);
    }
  } else if (type === 'completed') {
    if (data) {
      return data.filter(task => task.completed);
    }
  } else {
    return;
  }
};