const ActiveTask = ({ activeTask }) => {
  return ( 
    <div className='wrapper active-task-wrapper shadow-sm bg-body rounded'>
      <i className="bi bi-circle p-3" style={{ fontSize: '2rem', color: 'rgb(229, 228, 226)' }}></i>

      <span className='m-3'>{activeTask}</span>
    </div>
   );
}
 
export default ActiveTask;