import { a as useStore } from './index-a7b68138.js';
import 'zustand';
import 'zustand/context';
import 'd3-zoom';

var edgesSelector = function edgesSelector(state) {
  return state.edges;
};

function useEdges() {
  var edges = useStore(edgesSelector);
  return edges;
}

export { useEdges as default };
//# sourceMappingURL=useEdges.js.map
