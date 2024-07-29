import React, { useContext, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Drop from './dragAndDrop/drop';
import Drag from './dragAndDrop/drag';
import ColumnView from './column';
import { useStyles } from './styles';
import DashboardContext from './context/context';

export default function Board() {
  const classes = useStyles();
  const { data, onDragEnd } = useContext(DashboardContext);

  return (

    <DragDropContext onDragEnd={data => onDragEnd(data)}>
      <Drop
        className={classes.container}
        droppableId="all-columns"
        type="COLUMN"
        direction="horizontal"
      >
        {data?.columnOrder.map((columnId: string, index: number) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId: string) => data.tasks[taskId]);
          return (
            <Drag
              key={columnId}
              draggableId={columnId}
              index={index}
            >
              <ColumnView
                column={column}
                talents={tasks}
                isDragDisabled={false}
              />
            </Drag>
          );
        })}
      </Drop>
    </DragDropContext>
  );
}
