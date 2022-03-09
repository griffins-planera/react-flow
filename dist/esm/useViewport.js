import shallow from 'zustand/shallow';
import { a as useStore } from './index-a7b68138.js';
import 'zustand';
import 'zustand/context';
import 'd3-zoom';

var viewportSelector = function viewportSelector(state) {
  return {
    x: state.transform[0],
    y: state.transform[1],
    zoom: state.transform[2]
  };
};

function useViewport() {
  var viewport = useStore(viewportSelector, shallow);
  return viewport;
}

export { useViewport as default };
//# sourceMappingURL=useViewport.js.map
