type TextFieldProps = {
  value: string,
  onNewTaskChange: (e: { target: HTMLInputElement }) => void,
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  error: string | null,
  isValid: boolean
}

const TextField = ({ value, onNewTaskChange, onHandleSubmit, error, isValid }: TextFieldProps) => {
  return (
    <div className='wrapper new-task-wrapper shadow-sm bg-body rounded d-flex justify-content-around'>
      <form onSubmit={onHandleSubmit} >
        <input
          className='border-0 m-3'
          placeholder='What needs to be done?'
          value={value}
          onChange={onNewTaskChange}
        />
        <button className='button-check' disabled={isValid}>
          <i className="bi bi-check2 p-3"
            style={{ fontSize: '2rem', color: 'rgb(229, 228, 226)' }}>
          </i>
        </button>
        {
          error && (<div className='fs-6 text-danger text-center'>{error}</div>)
        }
      </form>
    </div>
  );
};

export default TextField;