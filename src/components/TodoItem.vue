<script setup>
import DoneButton from './DoneButton.vue'
import DeleteButton from './DeleteButton.vue'
import TodoDescription from './TodoDescription.vue'
import UndoButton from './UndoButton.vue'
import { defineProps } from 'vue'

const props = defineProps(['done'])
</script>

<template>
    <div class="flex w-[100%] gap-[7px] h-[60px] justify-start flex-nowrap">
        <UndoButton @undoItem="$emit(`undoItem`)" class="flex-[13]" :class="{hidden: !props.done}"/>
        <DoneButton @todoDone="$emit(`todoDone`)" class="flex-[13]" :class="{hidden: props.done}" />
        <DeleteButton @deleteItem="$emit(`deleteItem`)" class="flex-[13]" :class="{hidden: props.done}"/>
        <TodoDescription :class="{'flex-[74]': !props.done, 'flex-[87]': props.done}" :done="props.done">
            <slot></slot>
        </TodoDescription>
    </div>
</template>