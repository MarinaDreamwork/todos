import { useState } from "react";
import ActiveTask from "./activeTask";
import CompletedTask from "./completedTask";
import Dashboard from "./dashboard";
import NewTask from "./newTask";

const TodosWrapper = () => {
  const [data, setData] = useState({ value: '' });
  const [activeTasks, setActiveTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const hanleChange = ({ target }) => {
    console.log(target.value);
    setData({ value: target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      value: ''
    });
    setActiveTasks([...activeTasks, data.value]);
    console.log('data', data);
  };
  return ( 
    <div className='container todo-wrapper shadow-lg p-3 mb-5 bg-body rounded align-middle bg-secondary'>
      <h1 className='todo-header'>todos</h1>
      <NewTask value={data.value} onNewTaskChange={hanleChange} onHandleSubmit={handleSubmit} />
      {activeTasks.length > 0 ?
      activeTasks.map((activeTask, index) => <ActiveTask key={index} activeTask={activeTask}/>) :
      null}
      {/*<Tasks>
      <ActiveTask />
      <CompletedTask />
      </Tasks> */}
      <Dashboard count={activeTasks.length}/>
    </div>
  );
};
 
export default TodosWrapper;