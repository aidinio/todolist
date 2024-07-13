<script setup>
import { PhCheckCircle } from '@phosphor-icons/vue'
</script>

<template>
  <button @click="$emit(`todoDone`)" class="bg-green-background rounded-[17px] text-green-foreground focus:outline-none done-shadow"><PhCheckCircle :size="18" weight="bold" class="inline-block align-top mr-[5px]"/>Done</button>
</template>