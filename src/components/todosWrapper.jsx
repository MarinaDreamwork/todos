import ActiveTask from "./activeTask";
import CompletedTask from "./completedTask";
import Dashboard from "./dashboard";
import NewTask from "./newTask";

const TodosWrapper = () => {
  return ( 
    <div className='container todo-wrapper'>
      <h1 className='todo-header d-flex justify-content-center'>todos</h1>
      <NewTask />
      <ActiveTask />
      <CompletedTask />
      <Dashboard />
    </div>
  );
};
 
export default TodosWrapper;