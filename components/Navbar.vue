<script setup lang="ts">
const links = [{
  label: 'Inicio',
  to: '/',
  inactive: 'text-gray-200',
  icon: 'i-heroicons-home',
  badge: 'New'
}, {
  label: 'My data',
  to: '/my_data',
  inactive: 'text-gray-200',
  icon: 'i-heroicons-table-cells',
}]

</script>

<template>
  <nav class="flex justify-between items-center gap-20 p-3 h-20">
    <UNavigationLinks :links="links" class="flex items-baseline gap-20 p-3 h-20" />
    <UColorModeToggle />
  </nav>
  <UProgress />
</template>