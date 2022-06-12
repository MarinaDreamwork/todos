const Dashboard = ({ count }) => {
  return ( 
    <div className='wrapper-dashboard d-flex justify-content-between align-items-center'>
      <div>
        <p className='m-0 p-2'>{count} items left</p>
      </div>
      <div>
        <span className='button '>All</span>
        <span className='button'>Active</span>
        <span className='button'>Completed</span>
      </div>
      <span className='button'>Clear completed</span>
    </div>
  );
};
 
export default Dashboard;