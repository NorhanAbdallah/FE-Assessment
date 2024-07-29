import React from 'react';
import { DashboardData } from '../../../types';
import { DropResult } from 'react-beautiful-dnd';

type State = {
  data: DashboardData | undefined;
  setData: (data: DashboardData) => void;
  onDragEnd: (res: DropResult) => void;
};

const DashboardContext = React.createContext<State>({
  data: undefined,
  setData: (data: DashboardData) => { },
  onDragEnd: (res: DropResult) => { },
});
export default DashboardContext;
