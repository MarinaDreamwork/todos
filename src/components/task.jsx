const Task = ({ task, onTaskChangeClick }) => {
  console.log('task', task);

  const getCircleClass = () => {
    return task.completed ? ' bi-check-circle' : ' bi-circle';
  };

  const getTaskNameClass = () => {
    return task.completed ? ' completed-task-name' : '';
  };

  return ( 
    <div className='wrapper shadow-sm bg-body rounded'>
      <button
        className='button-circle'
        onClick={() => onTaskChangeClick(task.id)}>
        <i 
          className={'bi p-3 ' + getCircleClass()}
          style={{ fontSize: '2rem', color: 'rgb(229, 228, 226)' }}>
        </i>
      </button>
      <span className={'m-3' + getTaskNameClass()}>{task.name}</span>
    </div>
   );
}
 
export default Task;