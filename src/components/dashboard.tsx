import { IButtonType } from 'types/button.interface';

type DashboardProps = {
  count: number,
  buttons: IButtonType[],
  onChooseCategoryTask: (taskType: string) => void,
  onDeleteTask: () => void
}

const Dashboard = ({ count, buttons, onChooseCategoryTask, onDeleteTask }: DashboardProps) => {
  return (
    <div className='wrapper-dashboard d-flex justify-content-between align-items-center'>
      <div>
        <p className='m-0 p-2'>{count} items left</p>
      </div>
      <div>
        {
          buttons.map(button => <span
            key={button.id}
            className={button.className}
            onClick={() => onChooseCategoryTask(button.className)}>
            {button.text}
          </span>)
        }
      </div>
      <span className='button' onClick={onDeleteTask}>Clear completed</span>
    </div>
  );
};

export default Dashboard;