<script setup>
import { CustomerService } from "@/service/CustomerService";
import { ProductService } from "@/service/ProductService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref, onMounted, watch } from "vue";
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";
import axios from "axios";
import { useForm } from "vee-validate";
import * as yup from "yup";
import Editor from 'primevue/editor';


// import { debounce } from 'lodash';
import { useToast } from "primevue/usetoast";
import { debounce } from "lodash-es";

import moment from "moment";

const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(true);
const loadingButtonDelete = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref("");
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const showAddLessonForm = ref(false);
const isLoadingButton = ref(false);

const image = ref();
const video = ref();
const imagePreview = ref(null);
const videoPreview = ref(null);

const schema = yup.object({
    title: yup.string().required().trim().label("Name"),
    content: yup.string().required().trim().label("Content"),
    duration: yup.string().required().trim().label("Duration"),
});
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: schema,
});
const [title] = defineField("title");
const [content] = defineField("content");
const [duration] = defineField("duration");

function goBackUsingBack() {
    if (router) {
        router.back();
    }
}

const items = ref([
    {
        label: 'Editar',
        icon: 'pi pi-pencil'
    },
    {
        label: 'Excluir',
        icon: 'pi pi-trash'
    },
    {
        label: 'Adicionar Teste',
        icon: 'pi pi-plus'
    },
    {
        label: 'Duvidas e Discussões',
        icon: 'pi pi-comments',
    },

]);

const closeConfirmation = () => {
    displayConfirmation.value = false;
};
const confirmDeletion = (id) => {
    displayConfirmation.value = true;
    dataIdBeingDeleted.value = id;
};

function getSeverity(status) {
    switch (status) {
        case "unqualified":
            return "danger";

        case "qualified":
            return "success";

        case "new":
            return "info";

        case "negotiation":
            return "warn";

        case "renewal":
            return null;
    }
}

const getData = async (page = 1) => {
    axios
        .get(`/api/courses/${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value,
            },
        })
        .then((response) => {
            retriviedData.value = response.data;
            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({
                severity: "error",
                summary: `${error}`,
                detail: "Message Detail",
                life: 3000,
            });
            goBackUsingBack();
        });
};

const deleteData = () => {
    loadingButtonDelete.value = true;

    axios
        .delete(`/api/courses/${dataIdBeingDeleted.value}`)
        .then(() => {
            retriviedData.value.data = retriviedData.value.data.filter(
                (data) => data.id !== dataIdBeingDeleted.value,
            );
            closeConfirmation();
            toast.add({
                severity: "success",
                summary: `Sucesso`,
                detail: "Sucesso ao apagar",
                life: 3000,
            });
        })
        .catch((error) => {
            toast.add({
                severity: "error",
                summary: `Erro`,
                detail: `${error}`,
                life: 3000,
            });
            loadingButtonDelete.value = false;
        })
        .finally(() => {
            loadingButtonDelete.value = false;
        });
};

const onVideoUpload = (event) => {
    const file = event.files[0];
    video.value = event.files[0];
    console.log(video.value);
    if (file && file.type.startsWith("video/")) {
        videoPreview.value = URL.createObjectURL(file);
    }
};

const onSubmit = handleSubmit((values) => {
    // if (image.value != null) {
    //     values.image = image.value;
    // }

    if (video.value != null) {
        values.video = video.value;
    }

    // values.birthdate = formatToYYYYMMDD(values.birthdate);

    isLoadingButton.value = true;
    axios
        .post(`/api/courses/${router.currentRoute.value.params.id}/topics`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            resetForm();
            getData();
            // router.back();
            toast.add({
                severity: "success",
                summary: `Successo`,
                detail: "Curso criado com sucesso",
                life: 3000,
            });
        })
        .catch((error) => {
            isLoadingButton.value = false;
            toast.add({
                severity: "error",
                summary: `Erro}`,
                detail: `${error.response.data.message}`,
                life: 3000,
            });
            if (error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        })
        .finally(() => {
            isLoadingButton.value = false;
        });
});
const onPageChange = (event) => {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getData(currentPage.value);
};

const debouncedSearch = debounce(() => {
    getData(currentPage.value);
}, 300);

watch(searchQuery, debouncedSearch);

onMounted(() => {
    getData();
});
</script>

<template>
    <div
        class="flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center"
        v-if="isLoadingDiv"
    >
        <div class="w-full">
            <div class="flex flex-col gap-4 text-center">
                <ProgressSpinner
                    style="width: 50px; height: 50px"
                    strokeWidth="8"
                    fill="var(--surface-ground)"
                    animationDuration=".5s"
                    aria-label="Custom ProgressSpinner"
                />
                <p>Por Favor Aguarde...</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col md:flex-row gap-12" v-else>
        <div class="w-full">
            <div class="card flex flex-col gap-4">
                <div class="w-full">
                    <Button
                        label="Voltar"
                        class="mr-2 mb-2"
                        @click="goBackUsingBack"
                        ><i class="pi pi-angle-left"></i> Voltar</Button
                    >
                    <Button label="Adicionar Aula" @click="showAddLessonForm = !showAddLessonForm" icon="pi pi-plus" />
                </div>
                 <form @submit="onSubmit" v-if="showAddLessonForm">
                    <div class="flex flex-col gap-2">
                        <label for="title">Titulo</label>
                        <InputText
                            v-model="title"
                            id="title"
                            placeholder="Titulo"
                            :class="{ 'p-invalid': errors.title }"
                            type="text"
                        />
                        <small id="title-help" class="p-error">{{
                            errors.title
                        }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="content">Conteudo</label>
                        <Textarea v-model="content" rows="5" cols="30" />
                        <!-- <Editor v-model="content" editorStyle="height: 320px" /> -->
                        <!-- <InputText
                            v-model="content"
                            id="content"
                            placeholder="Descrição"
                            :class="{ 'p-invalid': errors.content }"
                            type="text"
                        /> -->
                        <small id="content-help" class="p-error">{{
                            errors.content
                        }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="duration">Duração</label>
                        <InputText
                            v-model="duration"
                            id="duration"
                            placeholder="Descrição"
                            :class="{ 'p-invalid': errors.duration }"
                            type="text"
                        />
                        <small id="duration-help" class="p-error">{{
                            errors.duration
                        }}</small>
                    </div>

                    <!-- <div class="flex flex-col gap-">
                        <label for="image">Imagem</label>
                        <FileUpload
                            mode="basic"
                            name="image[]"
                            accept="image/*"
                            auto
                            :maxFileSize="1000000"
                            customUpload
                            @uploader="onFileUpload"
                        />
                        <div v-if="imagePreview" class="mt-2">
                            <img
                                :src="imagePreview"
                                class="w-32 h-32 object-cover rounded border"
                            />
                            <p class="text-sm mt-1 text-gray-600">
                                {{ imageFile?.name }}
                            </p>
                        </div>
                    </div> -->

                    <div class="flex flex-col gap-2">
                        <label for="video">Video</label>
                        <FileUpload
                            mode="basic"
                            name="video[]"
                            accept="video/*"
                            auto
                            :maxFileSize="30000000"
                            customUpload
                            @uploader="onVideoUpload"
                        />
                        <div v-if="videoPreview" class="mt-2">
                            <video controls class="w-64 h-40 rounded border">
                                <source :src="videoPreview" type="video/mp4" />
                                Seu navegador não suporta vídeo.
                            </video>
                            <p class="text-sm mt-1 text-gray-600">
                                {{ videoFile?.name }}
                            </p>
                        </div>
                    </div>

                    <Button
                        label="Submeter"
                        class="mr-2 mb-2"
                        @click="onSubmit"
                        :disabled="isLoadingButton"
                    ></Button>
                    <ProgressSpinner
                        style="width: 35px; height: 35px"
                        strokeWidth="8"
                        fill="var(--surface-ground)"
                        animationDuration=".5s"
                        aria-label="Custom ProgressSpinner"
                        v-if="isLoadingButton"
                    />
                </form>
                <div
                    class="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 rounded-lg shadow p-6"
                >
                    <!-- Imagem do curso -->
                    <div
                        class="md:w-1/3 w-full rounded-lg overflow-hidden shadow"
                    >
                        <img
                            :src="
                                '/storage/' + retriviedData.cover_image ||
                                'https://via.placeholder.com/400x250?text=Sem+Imagem'
                            "
                            alt="Imagem do curso"
                            class="object-cover w-full h-full"
                        />
                    </div>

                    <!-- Informações do curso -->
                    <div class="md:flex-1 flex flex-col justify-between">
                        <div>
                            <h1
                                class="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100"
                            >
                                {{ retriviedData.title }}
                            </h1>
                            <p
                                class="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line"
                            >
                                {{ retriviedData.description }}
                            </p>
                        </div>

                        <div class="text-gray-600 dark:text-gray-400 text-sm">
                            <p>
                                <strong>Duração:</strong>
                                {{ retriviedData.duration || "Indefinida" }}
                            </p>
                            <p>
                                <strong>Criado em:</strong>
                                {{
                                    moment(retriviedData.created_at).format(
                                        "DD-MM-YYYY HH:mm",
                                    )
                                }}
                            </p>
                            <p>
                                <strong>Atualizado em:</strong>
                                {{
                                    moment(retriviedData.updated_at).format(
                                        "DD-MM-YYYY HH:mm",
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Lista de aulas -->
                <div class="mt-10">
                    <h2
                        class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100"
                    >
                        Aulas
                    </h2>

                   <ul class="space-y-6">
    <li
        v-for="(topic, index) in retriviedData.topics"
        :key="topic.id"
        class="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
    >
        <Menubar :model="items" />
        <div class="flex flex-col md:flex-row gap-4 items-start">
            
            <!-- Parte esquerda: Título, duração e descrição -->
            <div class="flex-1">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {{ index + 1 }}. {{ topic.title }}
                    </h3>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ topic.duration || "Sem duração" }}
                    </span>
                </div>

                <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-2">
                    {{ topic.description || "Sem descrição" }}
                </p>
            </div>

            <!-- Parte direita: Vídeo -->
            <div class="w-full md:w-1/2">
                <video
                    v-if="topic.video_url"
                    controls
                    class="w-full rounded shadow"
                    :src="'/storage/' + topic.video_url"
                    type="video/mp4"
                >
                    Seu navegador não suporta vídeo.
                </video>
            </div>
        </div>
    </li>
</ul>
                </div>
            </div>
        </div>
    </div>
    <Dialog
        header="Confirmação"
        v-model:visible="displayConfirmation"
        :style="{ width: '350px' }"
        :modal="true"
    >
        <div class="flex align-items-center justify-content-center">
            <i
                class="pi pi-exclamation-triangle mr-3"
                style="font-size: 2rem"
            />
            <span>Tem certeza que deseja proceder?</span>
        </div>
        <template #footer>
            <Button
                label="Não"
                icon="pi pi-times"
                @click="closeConfirmation"
                class="p-button-text"
            />
            <Button
                label="Sim"
                icon="pi pi-check"
                @click="deleteData"
                class="p-button-text"
                autofocus
            />
        </template>
    </Dialog>
</template>
