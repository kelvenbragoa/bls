<script setup>
import { CustomerService } from "@/service/CustomerService";
import { ProductService } from "@/service/ProductService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref, onMounted, watch } from "vue";
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";
import { useForm } from "vee-validate";
// import { debounce } from 'lodash';
import { useToast } from "primevue/usetoast";
import { debounce } from "lodash-es";
import moment from "moment";
// import { object, string, number, date } from 'yup';
import * as yup from "yup";
import axios from "axios";
import { format, parse, parseISO, isValid } from "date-fns";

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
const roles = ref(null);
const isLoadingButton = ref(false);
const genderOptions = ref([
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
    { label: "Outro", value: "other" },
]);
const image = ref();
const video = ref();
const imagePreview = ref(null);
const videoPreview = ref(null);

function formatToYYYYMMDD(date) {
    const parsedDate = typeof date === "string" ? parseISO(date) : date;
    return isValid(parsedDate) ? format(parsedDate, "yyyy-MM-dd") : "";
}

const schema = yup.object({
    title: yup.string().required().trim().label("Name"),
    description: yup.string().required().trim().label("Email"),
    duration: yup.string().required().trim().label("Duration"),
});
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: schema,
});
const [title] = defineField("title");
const [description] = defineField("description");
const [duration] = defineField("duration");

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

const onFileUpload = (event) => {
    const file = event.files[0];
    image.value = event.files[0];
    console.log(image.value);

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
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
    if (image.value != null) {
        values.image = image.value;
    }

    if (video.value != null) {
        values.video = video.value;
    }

    values.birthdate = formatToYYYYMMDD(values.birthdate);

    isLoadingButton.value = true;
    axios
        .post(`/api/courses`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            // resetForm();
            router.back();
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

const getData = async (page = 1) => {
    axios
        .get(`/api/courses/create`, {
            params: {
                query: searchQuery.value,
            },
        })
        .then((response) => {
            retriviedData.value = response.data.roles;
            roles.value = response.data.roles;

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
                </div>
                <div class="font-semibold text-xl">Curso</div>
                <small class="p-error"
                    >Os campos marcados * sao considerados campos
                    obrigatorios.</small
                >
                <form @submit="onSubmit">
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
                        <label for="description">Descrição</label>
                        <InputText
                            v-model="description"
                            id="description"
                            placeholder="Descrição"
                            :class="{ 'p-invalid': errors.description }"
                            type="text"
                        />
                        <small id="description-help" class="p-error">{{
                            errors.description
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

                    <div class="flex flex-col gap-">
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
                    </div>

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
