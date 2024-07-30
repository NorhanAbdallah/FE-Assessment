import React from 'react';
import Board from './components/board';
import DashboardContext from './context/context';
import useDashboard from '../../service/useDashboard';

export default function DashboardLayout() {
  const { data, setData, handleDragEnd } =
    useDashboard();
  return (
    <DashboardContext.Provider
      value={{
        data,
        setData,
        handleDragEnd,
      }}
    >
      <Board />
    </DashboardContext.Provider>

  );
}
