<template>
    <li>
        <div class="node" @click="$emit('select-node', node.name)" :class="{ 'selected-node': isSelected }">
            {{ node.name }}
        </div>
        <ul class="children" v-if="node.children">
            <tree-node v-for="child in node.children" :key="child.name" :node="child"
                @select-node="$emit('select-node', $event)" :selected-node="selectedNode" />
        </ul>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { GraphNode } from '../services/data';

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
    padding: 0.75rem;
    margin: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s, transform 0.3s;
    cursor: pointer;
    width: 7rem;
    height: 1.5rem;
    text-align: center;
}

.node:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
    transform: scale(1.05);
}

li::marker {
    content: '';
}

.selected-node {
    background-color: #e0e0e0;
    border-color: #999;
}

.children {
    padding-left: 5rem;
    border-left: 1px solid #ccc;
    margin: 0;
    transition: all 0.3s ease-in-out;
}
</style>