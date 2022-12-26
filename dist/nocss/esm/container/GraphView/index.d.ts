import React from 'react';
import { NodeTypesWrapped, EdgeTypesWrapped, ConnectionLineType, KeyCode, ReactFlowProps } from '../../types';
export interface GraphViewProps extends Omit<ReactFlowProps, 'onSelectionChange' | 'nodes' | 'edges' | 'nodeTypes' | 'edgeTypes'> {
    nodeTypes: NodeTypesWrapped;
    edgeTypes: EdgeTypesWrapped;
    selectionKeyCode: KeyCode | null;
    preventSelectionKeyCode?: KeyCode | null;
    deleteKeyCode: KeyCode | null;
    multiSelectionKeyCode: KeyCode | null;
    connectionLineType: ConnectionLineType;
    onlyRenderVisibleElements: boolean;
    defaultZoom: number;
    defaultPosition: [number, number];
    defaultMarkerColor: string;
    selectNodesOnDrag: boolean;
    noDragClassName: string;
    noWheelClassName: string;
    noPanClassName: string;
}
declare const _default: React.MemoExoticComponent<{
    ({ nodeTypes, edgeTypes, onMove, onMoveStart, onMoveEnd, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, preventSelectionKeyCode, multiSelectionKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, selectNodesOnDrag, defaultZoom, defaultPosition, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, panOnMiddleButton, panOnTouchPadScroll, onPaneClick, onPaneScroll, onPaneContextMenu, onEdgeUpdate, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, edgeUpdaterRadius, onEdgeUpdateStart, onEdgeUpdateEnd, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, }: GraphViewProps): JSX.Element;
    displayName: string;
}>;
export default _default;
