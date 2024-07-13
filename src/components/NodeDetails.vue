<template>
    <div class="node-details" v-if="selectedNodeDetails">
        <h2>Node Details</h2>
        <p><strong>Name:</strong> {{ selectedNodeDetails.name }} </p>
        <p><strong>Description:</strong> {{ selectedNodeDetails.description }} </p>
        <button @click="deselectNode">Deselect</button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Node, graphData } from '../services/data';

export default defineComponent({
    name: 'NodeDetails',
    props: {
        selectedNode: {
            type: String,
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
    }
});
</script>

<style scoped></style>