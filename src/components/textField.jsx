const TextField = ({ value, onNewTaskChange, onHandleSubmit }) => {
  return ( 
    <div className='wrapper new-task-wrapper shadow-sm bg-body rounded d-flex justify-content-around'>
      <form onSubmit={onHandleSubmit} >
        <input 
          className='border-0 m-3'
          placeholder='What needs to be done?'
          value={value}
          onChange={onNewTaskChange}
        />
        <button className='button-check'>
          <i  className="bi bi-check2 p-3"
              style={{ fontSize: '2rem', color: 'rgb(229, 228, 226)' }}>
          </i>
        </button>
      </form>
    </div>
  );
};
 
export default TextField;