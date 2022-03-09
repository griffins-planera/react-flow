import { XYPosition, Dimensions } from './utils';
import { NodeHandleBounds } from './nodes';
export declare type NodeDimensionChange = {
    id: string;
    type: 'dimensions';
    dimensions: Dimensions;
    handleBounds?: NodeHandleBounds;
};
export declare type NodePositionChange = {
    id: string;
    type: 'position';
    position?: XYPosition;
    dragging?: boolean;
};
export declare type NodeSelectionChange = {
    id: string;
    type: 'select';
    selected: boolean;
};
export declare type NodeRemoveChange = {
    id: string;
    type: 'remove';
};
export declare type NodeChange = NodeDimensionChange | NodePositionChange | NodeSelectionChange | NodeRemoveChange;
export declare type EdgeSelectionChange = NodeSelectionChange;
export declare type EdgeRemoveChange = NodeRemoveChange;
export declare type EdgeChange = EdgeSelectionChange | EdgeRemoveChange;
