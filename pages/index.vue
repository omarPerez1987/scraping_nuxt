<script setup>
import { ref } from 'vue';

const url = ref('');

const enviarURL = async () => {
  try {
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url.value })
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al enviar la URL:', error);
  }
};
</script>


<template>
  <UDashboardCard title="Bienvenido" description="vamos a raspar los datos de Linkedin"
    icon="i-heroicons-computer-desktop">

    <div class="flex gap-5 mt-10">
      <UInput v-model="url" color="primary" variant="outline" type="text"
        placeholder="Inserta la URL del puesto de LinkedIn..." class="input_linkedin" />
      <UButton @click="enviarURL">Enviar</UButton>
    </div>

  </UDashboardCard>
</template>


<style>
.input_linkedin {
  min-width: 40%;
}
</style>
