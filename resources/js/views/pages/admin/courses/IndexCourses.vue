<script setup>
import axios from 'axios';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { onBeforeMount, reactive, ref, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';

// import { debounce } from 'lodash';
import { useToast } from 'primevue/usetoast';
import { debounce } from 'lodash-es';

import moment from 'moment';

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
const menu = ref();

const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Gerenciar Aulas',
                icon: 'pi pi-fw pi-book',
                command: () => {
                    router.push(`/admin/courses/${dataIdBeingDeleted.value}/manage`);
                }
            },
            {
                label: 'Relatorio',
                icon: 'pi pi-bars'
            },
            {
                label: 'Alunos Matriculados',
                icon: 'pi pi-bars'
            }
        ]
    }
]);

const toggle = (event, id) => {
    dataIdBeingDeleted.value = id;
    menu.value.toggle(event);
};

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

const getData = async (page = 1) => {
    axios
        .get(`/api/courses?page=${page}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            retriviedData.value = response.data;
            totalRecords.value = response.data.total;
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
        .delete(`/api/courses/${dataIdBeingDeleted.value}`)
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
                <div class="font-semibold text-xl">Cursos</div>
                    <DataTable
                    :value="retriviedData.data"
                    :paginator="true"
                    :rows="rowsPerPage"
                    :totalRecords="totalRecords"
                    dataKey="id"
                    :lazy="true"
                    :rowHover="true"
                    :loading="isLoadingDiv"
                    :first="(currentPage - 1) * rowsPerPage"
                    :onPage="onPageChange"
                    showGridlines
                    >
                    <template #header>
                        <div class="flex justify-between">
                            <router-link to="/admin/courses/create">
                                <Button label="Voltar" class="mr-2 mb-2">Novo Registro<i class="pi pi-plus"></i></Button>
                            </router-link>
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <InputText v-model="searchQuery" placeholder="Pesquisa" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty>Nenhuma registro encontrado. </template>
                    <template #loading> Carregando, por favor espere. </template>
                    <Column header="ID" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column header="Titulo" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.title }}
                        </template>
                    </Column>
                    <Column header="Descrição" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.description }}
                        </template>
                    </Column>
                    <Column header="Duração" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.duration }}
                        </template>
                    </Column>
                    <Column header="Data" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                        </template>
                    </Column>
                    <Column header="Ações" style="min-width: 12rem">
                    <template #body="{ data }">
                        <router-link class="m-3" :to="'/admin/courses/' + data.id + '/edit'"><i class="pi pi-file-edit"></i></router-link>  <router-link class="m-3" :to="'/admin/courses/' + data.id"><i class="pi pi-eye"></i></router-link>

                        <a class="m-3" href="#" @click.prevent="confirmDeletion(data.id)"><i class="pi pi-trash"></i></a>
                        <a class="m-3" href="#" @click="toggle($event,data.id)" aria-haspopup="true" aria-controls="overlay_menu" ><i class="pi pi-ellipsis-v" ></i></a>
                        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                    </template>
                </Column>
                </DataTable>
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