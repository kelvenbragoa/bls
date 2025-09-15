<script setup lang="ts">
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import FooterWidget from '@/components/landing/FooterWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import PricingWidget from '@/components/landing/PricingWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import FloatingChat from '@/components/FloatingChat.vue';
import { onBeforeMount, reactive, ref, onMounted, watch } from "vue";
import axios from "axios";
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';


// import { debounce } from 'lodash';
import { useToast } from "primevue/usetoast";
import { debounce } from "lodash-es";

import moment from "moment";

const router = useRouter();
const user = ref(null);

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

const logout = () => {
    axios.post(`/api/logout`)
    .then((response) => {
        localStorage.removeItem('token'); // Remova o token armazenado
        localStorage.removeItem('user');  // Remova as informações do usuário
        router.replace('/auth/login'); // Redirecione para a página de login
    })
    .catch((error) => {
        console.error('Erro ao fazer logout:', error); // Lide com erros de logout
        localStorage.removeItem('token'); // Limpeza mesmo em caso de erro
        localStorage.removeItem('user');
        router.replace('/auth/login'); // Redirecione para a página de login
    });
};

const getData = async (page = 1) => {
    axios
        .get(`/api/public/courses/${router.currentRoute.value.params.id}`, {
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
        });
};

onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user'));
    getData();
});
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                <a class="flex items-center" href="#">
        <img src="/logo.png" class="w-20 h-12" alt="">
        <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20"></span>
    </a>
    <Button
        class="lg:!hidden"
        text
        severity="secondary"
        rounded
        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
    >
        <i class="pi pi-bars !text-2xl"></i>
    </Button>
    <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
        <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
            <li>
                <router-link to="/" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" @click="smoothScroll('features')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Courses</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Pricing</span>
                </router-link>
            </li>
        </ul>
        <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
            <!-- <Button label="Login" text as="router-link" to="/auth/login" rounded></Button> -->
            <Button label="Login" text as="router-link" to="/auth/login" rounded v-if="!user"></Button>
            <div v-else>
                <Button label="Meus Cursos" text as="router-link" to="/my-courses" rounded ></Button>
                <Button label="Sair" text  rounded @click="logout()"></Button>
            </div>
            
            
        
        </div>
        
    </div>
            </div>
            <HeroWidget />
            <div class="flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center"  v-if="isLoadingDiv">
                    <div class="w-full">
                        <div class="flex flex-col gap-4 text-center">
                            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                            <p>Por Favor Aguarde...</p>
                        </div>
                    </div>
            </div>
            <div v-else>

            
            <div
                    class="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 rounded-lg shadow p-6"
                 >
                    <!-- Imagem do curso -->
                    <div
                        class="md:w-1/3 w-full rounded-lg overflow-hidden shadow"
                    >
                        <img
                            :src="
                                retriviedData.cover_image
                                ? '/storage/' + retriviedData.cover_image
                                : '/logo.png'
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
                <!-- <video
                    v-if="topic.video_url"
                    controls
                    class="w-full rounded shadow"
                    :src="'/storage/' + topic.video_url"
                    type="video/mp4"
                >
                    Seu navegador não suporta vídeo.
                </video> -->
                <h2>Por Aceda ao seus cursos</h2>
            </div>
        </div>
    </li>
</ul>
                </div>
                </div>
            
            <FooterWidget />
            <FloatingChat />
        </div>
    </div>
</template>
