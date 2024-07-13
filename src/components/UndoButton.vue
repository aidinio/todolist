<script setup>
import { PhArrowCircleLeft } from '@phosphor-icons/vue';
</script>

<template>
     <button @click="$emit(`undoItem`)" class="bg-yellow-background rounded-[17px] text-yellow-foreground focus:outline-none undo-shadow"><PhArrowCircleLeft :size="18" weight="bold" class="inline-block align-top mr-[5px]"/>Undo</button>
</template>