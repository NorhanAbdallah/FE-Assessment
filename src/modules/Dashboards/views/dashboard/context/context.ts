import React from 'react';
import { DashboardData } from '../../../types';
import { DropResult } from 'react-beautiful-dnd';

type State = {
  data: DashboardData | undefined;
  setData: (data: DashboardData) => void;
  handleDragEnd: (res: DropResult) => void;
};

const DashboardContext = React.createContext<State>({
  data: undefined,
  setData: (data: DashboardData) => { },
  handleDragEnd: (res: DropResult) => { },
});
export default DashboardContext;
