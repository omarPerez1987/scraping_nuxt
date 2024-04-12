<script setup>
import { useStateData } from '~/stores/state'
import moment from 'moment';

const store = useStateData()

const solicitud = ref({
    id: `${Math.floor(Math.random() * 1000)}`,
    fechaAplicacion: `${moment().format('YYYY-MM-DD')}`,
    posicionOferta: 'Fullstack',
    recruiter: '',
    plataforma: 'linkedin',
    empresa: '',
    estadoFase: 'solicitado',
    ultimoContacto: '',
    emailRecruiter: '',
    comentarios: ''
})


const onSubmit = () => {
    store.addOrders(solicitud.value)
    store.setOpen(false);
}

const position_offer = ['Fullstack', 'Frontend', 'Backend']
const platform = ['Linkedin', 'Infojobs', 'Indeed', 'Autocandidatura', 'Oferta Oxygen', 'Otras']
const phase_state = ['Solicitado', 'Abierto CV', 'Entrevista con RRHH', 'Prueba técnica', 'Entrevista final', 'Rechazado', 'No responden', 'Firma de contrato']

</script>



<template>
    <section class="p-5">
        <h3 class="flex items-center gap-2 h-20 text-2xl ">
            <UIcon name="i-heroicons-queue-list" />
            Formulario
        </h3>
        <UForm class="flex flex-col gap-3" @submit="onSubmit">
            <UFormGroup for="fechaAplicacion" label="Fecha de aplicación" required>
                <UInput v-model="solicitud.fechaAplicacion" type="date" />
            </UFormGroup>
            <UFormGroup label="Posición oferta" required>
                <USelect v-model="solicitud.posicionOferta" :options="position_offer" />
            </UFormGroup>
            <UFormGroup for="recruiter" label="Recruiter" hint="Optional">
                <UInput v-model="solicitud.recruiter" type="text" />
            </UFormGroup>
            <UFormGroup for="plataforma" label="Plataforma" required>
                <USelect v-model="solicitud.plataforma" :options="platform" />
            </UFormGroup>
            <UFormGroup for="empresa" label="Empresa" required>
                <UInput v-model="solicitud.empresa" type="text" />
            </UFormGroup>
            <UFormGroup for="estadoFase" label="Estado de la fase" required>
                <USelect v-model="solicitud.estadoFase" :options="phase_state" />
            </UFormGroup>
            <UFormGroup for="ultimoContacto" label="Último contacto" required>
                <UInput v-model="solicitud.ultimoContacto" type="date" />
            </UFormGroup>
            <UFormGroup for="emailRecruiter" label="Email Recruiter" hint="Optional">
                <UInput v-model="solicitud.emailRecruiter" type="text" />
            </UFormGroup>
            <UFormGroup for="comentarios" label="Comentarios" hint="Optional">
                <UTextarea v-model="solicitud.comentarios" cols="30" rows="5" />
            </UFormGroup>
            <UButton type="submit" class="mt-5">Enviar</UButton>
        </UForm>
    </section>
</template>