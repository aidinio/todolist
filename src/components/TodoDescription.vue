<script setup>

const props = defineProps(['done'])
</script>

<template>
    <div class=" rounded-[17px] flex overflow-hidden" :class="[props.done ? ['bg-green-background', 'text-green-foreground', 'description-shadow-done'] : ['bg-purple-background', 'text-purple-foreground', 'description-shadow-pending']]">
        <p class="content-center justify-start mx-[30px]">
            <slot></slot>
        </p>
    </div>
</template>