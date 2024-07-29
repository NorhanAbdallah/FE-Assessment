import React from 'react';
import Board from './board';
import DashboardContext from './context/context';
import useDashboard from '../../service/useDashboard';

export default function DashboardLayout() {
  const { data, setData, onDragEnd } =
    useDashboard();
  return (
    <DashboardContext.Provider
      value={{
        data,
        setData,
        onDragEnd,
      }}
    >
      <Board />
    </DashboardContext.Provider>

  );
}
