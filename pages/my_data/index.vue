<script setup>
import { ref, watch } from 'vue'
import { useStateData } from '~/stores/state'

const store = useStateData()
const data = ref([])

watch(() => {
  data.value = store.getData
})

const columns = [{
  key: 'id',
  label: 'ID',
}, {
  key: 'fechaAplicacion',
  label: 'Fecha de aplicación',
  sortable: true
}, {
  key: 'posicionOferta',
  label: 'Posición oferta'
}, {
  key: 'recruiter',
  label: 'Recruiter'
}, {
  key: 'plataforma',
  label: 'Plataforma'
}, {
  key: 'empresa',
  label: 'Empresa'
}, {
  key: 'estadoFase',
  label: 'Estado de la fase'
}, {
  key: 'ultimoContacto',
  label: 'Último Contacto',
  sortable: true
}, {
  key: 'emailRecruiter',
  label: 'Email Recruiter'
},
{
  key: 'comentarios',
  label: 'Comentarios'
}, {
  key: 'actions'
}]

const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }], [{
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

const page = ref(1)
const pageCount = 12

const rows = computed(() => {
  return data.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

</script>

<template>
  <main class="p-12">
    <UButton class="mb-5" label="Open Form" @click="store.setOpen(true)" />
    <section>
      <h3 class="flex items-center gap-2 h-20 text-2xl ">
        <UIcon name="i-heroicons-queue-list" />
        Data
      </h3>
      <UTable :columns="columns" :rows="rows" loading
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :progress="{ color: 'primary', animation: 'carousel' }">
        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </template>
      </UTable>

      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" :page-count="pageCount" :total="data.length" />
      </div>
      <UModal v-model="store.open" :transition="false">
        <FormData />
      </UModal>
    </section>

  </main>

</template>
