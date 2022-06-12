const CompletedTask = () => {
  return ( 
    <div className='wrapper completed-task-wrapper shadow-sm bg-body rounded'>
      <i className="bi bi-check-circle p-3" style={{ fontSize: '2rem', color: 'rgb(229, 228, 226)' }}></i>
      <p className='m-3 completed-task-name'>Прекрасный код</p>
    </div>
   );
};
 
export default CompletedTask;