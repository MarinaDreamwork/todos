import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import TextField from "./textField";
import { getTasks, renderTypeTasks } from "../utils/utils";
import { IButtonType } from 'types/button.interface';
import { ITask } from 'types/task.interface';

type TasksData = {
  value: string,
  all: ITask[]
}

const TodosWrapper = () => {

  const [data, setData] = useState<TasksData>({ value: '', all: [] });

  const buttons: IButtonType[] = [
    { id: 1, className: 'button all', text: 'All' },
    { id: 2, className: 'button active', text: 'Active' },
    { id: 3, className: 'button completed', text: 'Completed' }
  ];

  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    console.log(e.target.value);
    setData({
      ...data,
      value: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({
      ...data,
      value: '',
      all: [...data.all, { id: Date.now(), name: data.value, completed: false }]
    });
    setTasks(data.all);
  };

  const toggleComplete = (id: IButtonType['id']) => {
    const completedTasks = data.all.map(task => {
      if (task.id === id) {
        if (!task.completed) {
          return { ...task, completed: true }
        } else {
          return { ...task, completed: false }
        }
      }
      return { ...task }
    });

    setData({
      ...data,
      all: [...completedTasks]
    })
  };

  const handleCategoryChoose = (className: string) => {
    if (className.includes('active')) {
      setTasks(getTasks(data.all, 'active'));
    } else if (className.includes('completed')) {
      setTasks(getTasks(data.all, 'completed'));
    } else if (className.includes('all')) {
      setTasks(data.all);
    }
  };

  const handleDeleteComplete = () => {
    const filteredTasks = data.all.filter(task => !task.completed);
    setData({
      ...data,
      all: filteredTasks
    });
  };

  const count = data.all.filter(task => !task.completed)?.length;

  useEffect(() => {
    setTasks(data.all);
  }, [data]);

  return (
    <div className='container todo-wrapper shadow-lg p-3 mb-5 bg-body rounded align-middle print-bg-secondary'>
      <h1 className='todo-header'>todos</h1>
      <TextField
        value={data.value}
        onNewTaskChange={handleChange}
        onHandleSubmit={handleSubmit}
      />
      {
        renderTypeTasks(tasks, toggleComplete)
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