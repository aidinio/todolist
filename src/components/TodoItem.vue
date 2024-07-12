<script setup>
import DoneButton from './DoneButton.vue'
import DeleteButton from './DeleteButton.vue'
import TodoDescription from './TodoDescription.vue'
</script>

<template>
    <div class="flex w-[100%] gap-[7px] h-[60px] justify-start flex-nowrap">
        <DoneButton class="flex-[13]" />
        <DeleteButton class="flex-[13]" />
        <TodoDescription class="flex-[74]">
            <slot></slot>
        </TodoDescription>
    </div>
</template>