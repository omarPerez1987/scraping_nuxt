<script setup lang="ts">
const links = [{
  label: 'Inicio',
  to: '/',
  inactive: 'text-gray-200',
  icon: 'i-heroicons-home'
}, {
  label: 'My data',
  to: '/my_data',
  inactive: 'text-gray-200',
  icon: 'i-heroicons-table-cells',
  badge: 'New'
}]

</script>

<template>
  <nav class="flex justify-between items-center gap-20 p-3 h-20 border-b-2">
    <UNavigationLinks :links="links" class="flex items-baseline gap-20 p-3 h-20" />
    <UColorModeToggle />
  </nav>

</template>