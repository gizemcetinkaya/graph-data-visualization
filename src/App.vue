<template>
  <div id="app">
    <GraphView @select-node="selectNode" />
    <NodeDetails :selectedNode="selectedNode" @deselect-node="deselectNode" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GraphView from './components/GraphView.vue';
import NodeDetails from './components/NodeDetails.vue';

export default defineComponent({
  name: 'App',
  components: {
    GraphView,
    NodeDetails,
  },
  setup() {
    const selectedNode = ref<string | null>(null);

    const selectNode = (nodeName: string) => {
      selectedNode.value = nodeName;
    };

    const deselectNode = () => {
      selectedNode.value = null;
    };

    return {
      selectedNode,
      selectNode,
      deselectNode,
    };
  },
});
</script>