<template>
    <div class="graph-view">
        <h2>Graph View</h2>
        <div v-if="loading">Loading...</div>
        <ul v-else>
            <li v-for="node in nodes" :key="node.name">
                {{ node.name }}: {{ node.description }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { fetchGraphData } from '../services/api';
import { Node } from '../services/data';

export default defineComponent({
    name: 'GraphView',
    setup() {

        const nodes = ref<Node[]>([]);
        const loading = ref(true);

        onMounted(async () => {
            nodes.value = await fetchGraphData();
            loading.value = false;
        });

        return {
            nodes,
            loading,
        };
    }
});
</script>

<style scoped></style>