<template>
    <div>
        <pre>{{ store.route }}</pre>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../store';

const store = useStore()
</script>
