import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { DraggableProvided } from 'react-beautiful-dnd';
import { Talent, Column } from '../../../types';
import Drop from '../dragAndDrop/drop';
import clsx from 'clsx';
import DashboardCard from './dashboard-card/';
import { useStyles } from '../styles';

interface ColumnProps {
  className?: string;
  column: Column;
  talents: Talent[];
  provided?: DraggableProvided;
  isDragDisabled: boolean;
}

const ColumnView: FC<ColumnProps> = ({ column, talents, provided, isDragDisabled }) => {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <Typography
        variant={'subtitle2'}
        className={clsx(classes.columnTitle, column.id)}
        {...provided?.dragHandleProps}
      >
        <div className={clsx('dot', column.id)} />
        {column.title}
        <Typography variant={'caption'} className={'total-tasks'}>
          {talents.length}
        </Typography>
      </Typography>
      <Drop
        isDropDisabled={isDragDisabled}
        droppableId={column.id}
        type="TASK"
        className="task-drop"
      >
        {talents.map((talent, index) => (
          <DashboardCard key={talent.id} index={index} talent={talent} />
        ))}
      </Drop>
    </div>
  );
};

export default ColumnView;
