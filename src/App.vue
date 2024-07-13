<template>
  <div id="app">
    <GraphView />
    <NodeDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphView from './components/GraphView.vue';
import NodeDetails from './components/NodeDetails.vue';

export default defineComponent({
  name: 'App',
  components: {
    GraphView,
    NodeDetails,
  },
});
</script>