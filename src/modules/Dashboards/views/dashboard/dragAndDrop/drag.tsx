import React, { FC, ReactNode } from 'react';
import { Draggable, DraggableProps } from 'react-beautiful-dnd';

interface DragProps extends Omit<DraggableProps, 'children'> {
  className?: string;
  children: ReactNode;
  dragAll?: boolean;
}

const Drag: FC<DragProps> = ({ className, children, dragAll, ...props }) => {
  if (!React.isValidElement(children)) {
    return <div />;
  }
  return (
    <Draggable {...props}>
      {provided => {
        return (
          <div
            className={className}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {React.cloneElement(children)}
          </div>
        );
      }}
    </Draggable>
  );
};


export default Drag;
