<template>
    <div class="node-details" v-if="selectedNodeDetails">
        <div class="node-header">
            <h2>Node Details</h2>
            <button @click="deselectNode">X</button>
        </div>
        <p v-if="selectedNodeDetails.parent"><strong>Parent:</strong> {{ selectedNodeDetails.parent }} </p>
        <p><strong>Name:</strong> {{ selectedNodeDetails.name }}</p>
        <p><strong>Description:</strong> {{ selectedNodeDetails.description }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Node, graphData } from '../services/data';

export default defineComponent({
    name: 'NodeDetails',
    props: {
        selectedNode: {
            type: String as () => string | null,
            required: false,
        },
    },
    emits: ['deselect-node'],
    setup(props, { emit }) {
        const selectedNodeDetails = computed<Node | undefined>(() => {
            return props.selectedNode ? graphData.find(node => node.name === props.selectedNode) : undefined;
        });

        const deselectNode = () => {
            emit('deselect-node');
        };

        return {
            selectedNodeDetails,
            deselectNode,
        };
    },
});
</script>

<style scoped>
.node-details {
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid #ccc;
    padding: 1.5rem;
    margin: 1rem 0 0 5rem;
    background-color: #f9f9f9;
    width: 20rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.node-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.node-details h2 {
    margin: 0;
    font-size: 1rem;
}

.node-details button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    margin: 0;
}

.node-details p {
    margin: 0;
    font-size: 0.875rem;
    color: #333;
    text-align: left;
}
</style>