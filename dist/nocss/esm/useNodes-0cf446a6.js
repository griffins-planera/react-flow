import { b as useStore } from './index-6ac7458e.js';

var nodesSelector = function nodesSelector(state) {
  return Array.from(state.nodeInternals.values());
};

function useNodes() {
  var nodes = useStore(nodesSelector);
  return nodes;
}

export { useNodes as u };
//# sourceMappingURL=useNodes-0cf446a6.js.map
