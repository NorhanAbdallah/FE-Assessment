import { useCallback, useState } from 'react';
import { DashboardData, Talent } from '../types';
import { DropResult } from 'react-beautiful-dnd';
import { mockedData } from './mockedData';

const statuses = {
  APPLIED: 'APPLIED',
  SHORTLISTED: 'SHORTLISTED',
  INTERVIEW: 'INTERVIEW'
};

function useDashboard() {
  const [tasks, setTasks] = useState<Talent[]>(mockedData as any);

  const setBoardData = useCallback((talents: Talent[]) => {
    return {
      tasks: talents.reduce((obj, item) => Object.assign(obj, { [item.id]: { ...item } }), {}),
      columns: {
        'column1': {
          id: 'column1',
          title: statuses.APPLIED,
          taskIds: talents.filter(item => item.status === 'APPLIED').map(item => item.id),
        },
        'column2': {
          id: 'column2',
          title: statuses.SHORTLISTED,
          taskIds: talents.filter(item => item.status === 'SHORTLISTED').map(item => item.id),
        },
        'column3': {
          id: 'column3',
          title: statuses.INTERVIEW,
          taskIds: talents.filter(item => item.status === 'INTERVIEW').map(item => item.id),
        },
      },
      columnOrder: ['column1', 'column2', 'column3'],
    };
  }, []);

  const [data, setData] = useState<DashboardData | undefined>(setBoardData(mockedData as any));

  const handleDragEnd = useCallback(
    (res: DropResult) => {
      const { destination, draggableId } = res;
      if (destination) {
        let newTask: Talent[] = [];

        const targetStatus =
          destination.droppableId === 'column1'
            ? 'APPLIED'
            : destination.droppableId === 'column2'
              ? 'SHORTLISTED'
              : 'INTERVIEW';

        setTasks(prevTasks => {
          newTask = [...prevTasks];
          const targetTask = newTask.find(task => task.id === draggableId);
          if (targetTask) {
            targetTask.status = targetStatus;
            return newTask;
          } else {
            return prevTasks;
          }
        });
        setData(setBoardData(newTask));
      }
    },
    [setBoardData],
  );

  return {
    data,
    setData,
    handleDragEnd,
  };
}

export default useDashboard;
