import { b as useStore } from './index-6ac7458e.js';

var edgesSelector = function edgesSelector(state) {
  return state.edges;
};

function useEdges() {
  var edges = useStore(edgesSelector);
  return edges;
}

export { useEdges as u };
//# sourceMappingURL=useEdges-df9336b5.js.map
