import React, { ComponentType } from 'react';
import { NodeProps, WrapNodeProps } from '../../types';
declare const _default: (NodeComponent: ComponentType<NodeProps>) => React.MemoExoticComponent<{
    ({ id, type, data, xPos, yPos, selected, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, onDragStart, onDrag, onDragStop, style, className, isDraggable, isSelectable, isConnectable, selectNodesOnDrag, sourcePosition, targetPosition, hidden, resizeObserver, dragHandle, zIndex, isParent, noPanClassName, noDragClassName, }: WrapNodeProps): JSX.Element | null;
    displayName: string;
}>;
export default _default;
