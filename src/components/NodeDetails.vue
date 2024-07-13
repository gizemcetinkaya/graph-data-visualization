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
        const selectedNodeDetails = computed<Node | null>(() => {
            return props.selectedNode ? graphData.find(node => node.name === props.selectedNode) || null : null;
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
    padding: 10px;
    margin-top: 10px;
    background-color: #f9f9f9;
    width: 300px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.node-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.node-details h2 {
    margin: 0;
    font-size: 1.5em;
}

.node-details button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    padding: 0;
    margin: 0;
}

/* .node-details button:hover {
    background: #0056b3;
} */

.node-details p {
    margin: 0;
    font-size: 1em;
    color: #333;
}
</style>