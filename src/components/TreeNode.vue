<template>
    <li>
        <div class="node" @click="$emit('select-node', node.name)" :class="{ 'selected-node': isSelected }">
            {{ node.name }}
        </div>
        <ul v-if="node.children">
            <tree-node v-for="child in node.children" :key="child.name" :node="child"
                @select-node="$emit('select-node', $event)" :selected-node="selectedNode" />
        </ul>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { GraphNode } from '../services/api';

export default defineComponent({
    name: 'TreeNode',
    props: {
        node: {
            type: Object as PropType<GraphNode>,
            required: true,
        },
        selectedNode: {
            type: String as PropType<string | null>,
            required: false,
        },
    },
    emits: ['select-node'],
    setup(props, { emit }) {
        const isSelected = computed(() => props.node.name === props.selectedNode);

        return {
            isSelected,
        };
    },
});
</script>

<style scoped>
.node {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s, transform 0.3s;
    cursor: pointer;
    width: 100px;
    height: 50px;
    text-align: center;
}

.node:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
    transform: scale(1.05);
}

.selected-node {
    background-color: #e0e0e0;
    border-color: #999;
}

.children {
    padding-left: 20px;
    border-left: 1px solid #ccc;
    margin: 0;
    transition: all 0.3s ease-in-out;
}
</style>