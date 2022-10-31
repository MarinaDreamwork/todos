import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import TextField from "./textField";
import { getTasks, renderTypeTasks } from "../utils/utils";
import { IButtonType } from 'types/button.interface';
import { ITask } from 'types/task.interface';

type ErrorType = null | string;

type TasksData = {
  value: string,
  all: ITask[],
  error: ErrorType
}

const TodosWrapper = () => {

  const initialState: TasksData = { value: '', all: [], error: null };
  const [data, setData] = useState(initialState);

  const buttons: IButtonType[] = [
    { id: 1, className: 'button all', text: 'All' },
    { id: 2, className: 'button active', text: 'Active' },
    { id: 3, className: 'button completed', text: 'Completed' }
  ];

  const [tasks, setTasks] = useState<ITask[] | undefined>([]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setData({
      ...data,
      value: e.target.value
    } as TasksData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(data.value);
    if (!data.value) return;
    setData({
      ...data,
      value: '',
      all: [...data.all, { id: Date.now(), name: data.value, completed: false }],
      error: ''
    } as TasksData);
    setTasks(data.all);
  };

  const validate = (data: string) => {
    if (data === '') {
      setData(prevState => ({
        ...prevState,
        error: 'Поле должно быть заполнено'
      }));
    } else {
      setData(prevState => ({
        ...prevState,
        error: null
      }));
    }
  }

  const isValid = data.error ? true : false;

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
    } as TasksData)
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

  useEffect(() => {
    if (data.value) {
      validate(data.value);
    }
  }, [data.value]);

  return (
    <div className='container todo-wrapper shadow-lg p-3 mb-5 bg-body rounded align-middle print-bg-secondary'>
      <h1 className='todo-header'>todos</h1>
      <TextField
        value={data.value}
        onNewTaskChange={handleChange}
        onHandleSubmit={handleSubmit}
        error={data.error}
        isValid={isValid}
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