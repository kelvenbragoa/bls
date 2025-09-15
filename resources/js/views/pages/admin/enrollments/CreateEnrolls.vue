<script setup>
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { onBeforeMount, reactive, ref, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';
import { useForm } from 'vee-validate';
// import { debounce } from 'lodash';
import { useToast } from 'primevue/usetoast';
import { debounce } from 'lodash-es';
import moment from 'moment';
// import { object, string, number, date } from 'yup';
import * as yup from 'yup';
import axios from 'axios';
import { format, parse, parseISO, isValid } from 'date-fns'



const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(true);
const loadingButtonDelete = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const users = ref(null);
const courses = ref(null);
const isLoadingButton = ref(false);
const genderOptions = ref([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Outro', value: 'other' }
]);

function formatToYYYYMMDD(date) {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return isValid(parsedDate) ? format(parsedDate, 'yyyy-MM-dd') : ''
}


const schema = yup.object({
    user_id: yup.string().required().trim().label('user'),
    course_id: yup.string().required().trim().label('Email'),
    enrolled_at: yup.string().required().label('Data Inicio'),
    expires_at: yup.string().required().label('Data de Expiração'),
});
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: schema
});
const [user_id] = defineField('user_id');
const [course_id] = defineField('course_id');
const [enrolled_at] = defineField('enrolled_at');
const [expires_at] = defineField('expires_at');


const image = ref();



function goBackUsingBack() {
    if (router) {
        router.back();
    }
}

const closeConfirmation = () => {
    displayConfirmation.value = false;
};
const confirmDeletion = (id) => {
    displayConfirmation.value = true;
    dataIdBeingDeleted.value = id;
};

function getSeverity(status) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warn';

        case 'renewal':
            return null;
    }
}

const onSubmit = handleSubmit((values) => {
    if (image.value != null) {
        values.image = image.value;
    }

    values.enrolled_at = formatToYYYYMMDD(values.enrolled_at);
    values.expires_at = formatToYYYYMMDD(values.expires_at);

    isLoadingButton.value = true;
    axios
        .post(`/api/enrollments`, values,{
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
            // resetForm();
            router.back();
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Matricula criado com sucesso', life: 3000 });
        })
        .catch((error) => {
            isLoadingButton.value = false;
            toast.add({ severity: 'error', summary: `Erro}`, detail: `${error.response.data.message}`, life: 3000 });
            if (error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        })
        .finally(() => {
            isLoadingButton.value = false;
        });
});

const getData = async (page = 1) => {
    axios
        .get(`/api/enrollments/create`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            courses.value = response.data.courses;
            users.value = response.data.users;

            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            goBackUsingBack();
        });
};

const deleteData = () => {
    loadingButtonDelete.value = true;

    axios
        .delete(`/api/enrollments/${dataIdBeingDeleted.value}`)
        .then(() => {
            retriviedData.value.data = retriviedData.value.data.filter((data) => data.id !== dataIdBeingDeleted.value);
            closeConfirmation();
            toast.add({ severity: 'success', summary: `Sucesso`, detail: 'Sucesso ao apagar', life: 3000 });
        })
        .catch((error) => {
            toast.add({ severity: 'error', summary: `Erro`, detail: `${error}`, life: 3000 });
            loadingButtonDelete.value = false;
        })
        .finally(() => {
            loadingButtonDelete.value = false;
        });
};

const onPageChange = (event) => {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getData(currentPage.value);
};

const debouncedSearch = debounce(() => {
    getData(currentPage.value);
}, 300);

watch(searchQuery,debouncedSearch);

onMounted(() => {
    getData();
});

</script>

<template>
    <div class="flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center"  v-if="isLoadingDiv">
            <div class="w-full">
                <div class="flex flex-col gap-4 text-center">
                    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                    <p>Por Favor Aguarde...</p>
                </div>
            </div>
    </div>
    
    <div class="flex flex-col md:flex-row gap-12" v-else>
        <div class="w-full">
            
            <div class="card flex flex-col gap-4">
                <div class="w-full">
                    <Button label="Voltar" class="mr-2 mb-2" @click="goBackUsingBack"><i class="pi pi-angle-left"></i> Voltar</Button>
                </div>
                <div class="font-semibold text-xl">Matricula</div>
                <small class="p-error">Os campos marcados * sao considerados campos obrigatorios.</small>
                <form @submit="onSubmit">

                     <div class="flex flex-col gap-2">
                        <label for="user_id">Estudante</label>
                        <Dropdown v-model="user_id" filter :options="users" optionValue="id"  optionLabel="name" placeholder="Selecionar Estudante" class="w-full md:w-14rem" />
                        <small id="user_id-help" class="p-error">{{ errors.user_id }}</small>

                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="course_id">Curso</label>
                        <Dropdown v-model="course_id" filter :options="courses" optionValue="id"  optionLabel="title" placeholder="Selecionar Curso" class="w-full md:w-14rem" />
                        <small id="course_id-help" class="p-error">{{ errors.course_id }}</small>

                    </div>

                   
                   
                  
                   
                    <div class="flex flex-col gap-2">
                        <label for="enrolled_at">Inicio da Matricula</label>
                        <DatePicker v-model="enrolled_at" id="enrolled_at" placeholder="Data Inicio" :class="{ 'p-invalid': errors.enrolled_at }" type="text" />
                        <small id="enrolled_at-help" class="p-error">{{ errors.enrolled_at }}</small>
                    </div>
                     <div class="flex flex-col gap-2">
                        <label for="expires_at">Inicio da Matricula</label>
                        <DatePicker v-model="expires_at" id="expires_at" placeholder="Data Expira" :class="{ 'p-invalid': errors.expires_at }" type="text" />
                        <small id="expires_at-help" class="p-error">{{ errors.expires_at }}</small>
                    </div>
                    <Button label="Submeter" class="mr-2 mb-2" @click="onSubmit" :disabled="isLoadingButton"></Button>
                    <ProgressSpinner style="width: 35px; height: 35px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" v-if="isLoadingButton" />
                </form>
            </div>
        </div>
    </div>
    
    <Dialog header="Confirmação" v-model:visible="displayConfirmation" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>Tem certeza que deseja proceder?</span>
        </div>
        <template #footer>
            <Button label="Não" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
            <Button label="Sim" icon="pi pi-check" @click="deleteData" class="p-button-text" autofocus />
        </template>
    </Dialog>
</template>


