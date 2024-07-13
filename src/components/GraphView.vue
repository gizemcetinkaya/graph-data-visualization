<template>
    <div v-if="loading">Loading...</div>
    <div v-else class="graph-view">
        <h2>Graph View</h2>
        <div>
            <ul class="tree">
                <tree-node v-for="node in rootNodes" :key="node.name" :node="node" :selected-node="selectedNode"
                    @select-node="selectNode" />
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue';
import { fetchGraphData, GraphNode } from '../services/api';
import TreeNode from './TreeNode.vue';

export default defineComponent({
    name: 'GraphView',
    components: {
        TreeNode,
    },
    props: {
        selectedNode: {
            type: String as PropType<string | null>,
            required: false,
        },
    },
    emits: ['select-node'],
    setup(props, { emit }) {
        const nodes = ref<GraphNode[]>([]);
        const loading = ref(true);
        const rootNodes = ref<GraphNode[]>([]);

        const buildTree = (nodeMap: { [key: string]: GraphNode }, parentName: string | null): GraphNode[] => {
            return Object.values(nodeMap)
                .filter(node => node.parent === parentName)
                .map(node => ({
                    ...node,
                    children: buildTree(nodeMap, node.name),
                }));
        };

        onMounted(async () => {
            const data = await fetchGraphData();
            const nodeMap: { [key: string]: GraphNode } = {};
            data.forEach(node => {
                nodeMap[node.name] = { ...node };
            });
            rootNodes.value = buildTree(nodeMap, null);
            loading.value = false;
        });

        const selectNode = (nodeName: string | null) => {
            emit('select-node', nodeName);
        };

        return {
            rootNodes,
            loading,
            selectNode,
        };
    },
});
</script>

<style scoped>
.graph-view {
  display: flex;
  align-items: center;
}
.tree {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.tree ul {
  padding-left: 20px;
  border-left: 1px solid #ccc;
  margin: 0;
}
</style>