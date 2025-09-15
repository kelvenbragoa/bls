<script setup lang="ts">
import FloatingChat from "@/components/FloatingChat.vue";
import { onBeforeMount, reactive, ref, onMounted, watch, computed, nextTick } from "vue";
import axios from "axios";
import { RouterView, RouterLink, useRouter, useRoute } from "vue-router";
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

// Estados específicos para o player
const currentTopicIndex = ref(0);
const sidebarCollapsed = ref(false);
const isPlaying = ref(false);
const videoProgress = ref(0);
const videoDuration = ref(0);
const currentTime = ref(0);
const showDescription = ref(false);
const notes = ref('');
const videoExpanded = ref(false);
const videoLoading = ref(false);
const videoPlayer = ref(null);

// Computed para o tópico atual
const currentTopic = computed(() => {
    return retriviedData.value?.topics?.[currentTopicIndex.value] || null;
});

const logout = () => {
    axios
        .post(`/api/logout`)
        .then((response) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            router.replace("/auth/login");
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            router.replace("/auth/login");
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

const selectTopic = (index) => {
    currentTopicIndex.value = index;
};

const goToNextTopic = () => {
    if (currentTopicIndex.value < retriviedData.value.topics.length - 1) {
        currentTopicIndex.value++;
    }
};

const goToPreviousTopic = () => {
    if (currentTopicIndex.value > 0) {
        currentTopicIndex.value--;
    }
};

const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
};

const formatDuration = (seconds) => {
    if (!seconds) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const markAsComplete = (topicId) => {
    // Implementar lógica para marcar como concluído
    toast.add({
        severity: "success",
        summary: "Aula concluída!",
        detail: "Parabéns por completar esta aula.",
        life: 3000,
    });
};

const handleVideoError = (event) => {
    console.error('Erro no vídeo:', event);
    const video = event.target;
    const error = video.error;
    
    let errorMessage = 'Erro desconhecido no vídeo';
    if (error) {
        switch (error.code) {
            case error.MEDIA_ERR_ABORTED:
                errorMessage = 'Carregamento do vídeo foi abortado';
                break;
            case error.MEDIA_ERR_NETWORK:
                errorMessage = 'Erro de rede ao carregar vídeo';
                break;
            case error.MEDIA_ERR_DECODE:
                errorMessage = 'Erro ao decodificar o vídeo';
                break;
            case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                errorMessage = 'Formato de vídeo não suportado';
                break;
        }
    }
    
    toast.add({
        severity: "error",
        summary: "Erro no Vídeo",
        detail: errorMessage,
        life: 5000,
    });
};

const toggleVideoSize = () => {
    videoExpanded.value = !videoExpanded.value;
};

// Função para otimizar carregamento de vídeo baseado na conexão
const optimizeVideoLoading = () => {
    const video = videoPlayer.value;
    if (!video || !video.preload) {
        console.log('Video player not ready yet');
        return;
    }
    
    // Detectar velocidade da conexão se disponível
    if ('connection' in navigator) {
        const connection = navigator.connection;
        const effectiveType = connection.effectiveType;
        
        // Ajustar estratégia de preload baseado na conexão
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
            video.preload = 'none'; // Não carregar nada até o usuário clicar
        } else if (effectiveType === '3g') {
            video.preload = 'metadata'; // Carregar apenas metadados
        } else {
            video.preload = 'metadata'; // Manter otimizado mesmo em 4g
        }
    }
};

onMounted(() => {
    user.value = JSON.parse(localStorage.getItem("user"));
    getData();
});

// Watcher para otimizar carregamento quando o tópico mudar
watch(currentTopic, () => {
    if (currentTopic.value?.video_url) {
        nextTick(() => {
            // Aguardar um pouco mais para garantir que o elemento esteja no DOM
            setTimeout(() => {
                optimizeVideoLoading();
            }, 100);
        });
    }
});
</script>

<template>
    <!-- Loading State -->
    <div
        v-if="isLoadingDiv"
        class="flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center bg-surface-0 dark:bg-surface-900"
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
                <p class="text-surface-700 dark:text-surface-300">Por Favor Aguarde...</p>
            </div>
        </div>
    </div>

    <!-- Main Course Layout -->
    <div v-else class="min-h-screen bg-surface-50 dark:bg-surface-900">
        <!-- Top Navigation Bar -->
        <div class="bg-surface-0 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 px-4 py-3">
            <div class="flex items-center justify-between max-w-screen-2xl mx-auto">
                <!-- Left Side: Course Info & Sidebar Toggle -->
                <div class="flex items-center gap-4">
                    <Button
                        icon="pi pi-bars"
                        text
                        rounded
                        @click="toggleSidebar"
                        class="text-surface-600 dark:text-surface-300"
                    />
                    <router-link to="/" class="flex items-center gap-2 hover:opacity-80">
                        <img src="/logo.png" class="w-8 h-8" alt="Logo" />
                        <span class="font-semibold text-surface-900 dark:text-surface-0">BLS</span>
                    </router-link>
                    <div class="hidden md:block text-surface-600 dark:text-surface-400">
                        <i class="pi pi-angle-right mx-2"></i>
                        <span class="text-sm font-medium">{{ retriviedData?.title }}</span>
                    </div>
                </div>

                <!-- Right Side: User Actions -->
                <div class="flex items-center gap-2">
                    <Button
                        v-if="user"
                        label="Meus Cursos"
                        text
                        size="small"
                        as="router-link"
                        to="/my-courses"
                    />
                    <Button
                        v-if="user"
                        label="Sair"
                        text
                        size="small"
                        @click="logout"
                    />
                    <Button
                        v-else
                        label="Login"
                        text
                        size="small"
                        as="router-link"
                        to="/auth/login"
                    />
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="flex h-[calc(100vh-64px)]">
            <!-- Sidebar with Course Content -->
            <div 
                :class="[
                    'transition-all duration-300 bg-surface-0 dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 overflow-y-auto',
                    sidebarCollapsed ? 'w-0 min-w-0' : 'w-80 min-w-80'
                ]"
            >
                <div v-if="!sidebarCollapsed" class="p-4">
                    <!-- Course Header -->
                    <div class="mb-6">
                        <h2 class="text-lg font-bold text-surface-900 dark:text-surface-0 mb-2">
                            {{ retriviedData?.title }}
                        </h2>
                        <div class="flex items-center gap-4 text-sm text-surface-600 dark:text-surface-400">
                            <span>{{ retriviedData?.topics?.length || 0 }} aulas</span>
                            <span>{{ retriviedData?.duration || 'Duração variável' }}</span>
                        </div>
                    </div>

                    <!-- Topics List -->
                    <div class="space-y-2">
                        <div
                            v-for="(topic, index) in retriviedData?.topics"
                            :key="topic.id"
                            :class="[
                                'p-3 rounded-lg cursor-pointer transition-all duration-200 border',
                                currentTopicIndex === index 
                                    ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-700' 
                                    : 'bg-surface-50 dark:bg-surface-700 border-surface-200 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-600'
                            ]"
                            @click="selectTopic(index)"
                        >
                            <div class="flex items-start gap-3">
                                <!-- Play Icon -->
                                <div 
                                    :class="[
                                        'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1',
                                        currentTopicIndex === index 
                                            ? 'bg-primary-500 text-white' 
                                            : 'bg-surface-200 dark:bg-surface-600 text-surface-600 dark:text-surface-300'
                                    ]"
                                >
                                    <i 
                                        :class="[
                                            currentTopicIndex === index ? 'pi pi-pause' : 'pi pi-play',
                                            'text-xs'
                                        ]"
                                    ></i>
                                </div>

                                <!-- Topic Content -->
                                <div class="flex-1 min-w-0">
                                    <h4 
                                        :class="[
                                            'font-medium text-sm mb-1 line-clamp-2',
                                            currentTopicIndex === index 
                                                ? 'text-primary-700 dark:text-primary-300' 
                                                : 'text-surface-900 dark:text-surface-100'
                                        ]"
                                    >
                                        {{ index + 1 }}. {{ topic.title }}
                                    </h4>
                                    <div class="flex items-center gap-2 text-xs text-surface-500 dark:text-surface-400">
                                        <i class="pi pi-clock"></i>
                                        <span>{{ topic.duration || '5:00' }}</span>
                                        <span v-if="topic.video_url">• Vídeo</span>
                                    </div>
                                </div>

                                <!-- Completion Status -->
                                <div class="flex-shrink-0">
                                    <i class="pi pi-check-circle text-green-500 text-sm"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Video Player Area -->
            <div class="flex-1 flex flex-col">
                <!-- Video Player -->
                <div 
                    :class="[
                        'relative bg-surface-900 dark:bg-surface-950 video-player-container transition-all duration-300',
                        videoExpanded ? 'h-96' : 'h-80'
                    ]"
                >
                    <div v-if="currentTopic?.video_url" class="w-full h-full relative">
                        <!-- Loading Overlay -->
                        <div 
                            v-if="videoLoading" 
                            class="absolute inset-0 bg-black/50 flex items-center justify-center z-10"
                        >
                            <div class="text-center text-white">
                                <ProgressSpinner 
                                    style="width: 40px; height: 40px" 
                                    strokeWidth="4" 
                                    fill="transparent" 
                                    animationDuration="1s"
                                />
                                <p class="mt-2 text-sm">Carregando vídeo...</p>
                            </div>
                        </div>
                        
                        <video
                            ref="videoPlayer"
                            class="w-full h-full object-contain bg-black"
                            controls
                            preload="metadata"
                            playsinline
                            crossorigin="anonymous"
                            :poster="currentTopic?.thumbnail ? '/storage/' + currentTopic.thumbnail : null"
                            :src="'/storage/' + currentTopic.video_url"
                            @loadstart="videoLoading = true"
                            @loadeddata="videoLoading = false"
                            @canplay="videoLoading = false"
                            @loadedmetadata="videoDuration = $event.target.duration"
                            @timeupdate="currentTime = $event.target.currentTime"
                            @play="isPlaying = true"
                            @pause="isPlaying = false"
                            @error="handleVideoError"
                            @waiting="videoLoading = true"
                            @playing="videoLoading = false"
                        >
                            <source :src="'/storage/' + currentTopic.video_url" type="video/mp4">
                            <p>Seu navegador não suporta vídeo HTML5. <a :href="'/storage/' + currentTopic.video_url">Baixe o vídeo</a>.</p>
                        </video>
                    </div>
                    <div v-else class="w-full h-full flex items-center justify-center bg-surface-800">
                        <div class="text-center text-surface-300">
                            <i class="pi pi-video text-6xl mb-4"></i>
                            <p>Nenhum vídeo disponível para esta aula</p>
                        </div>
                    </div>

                    <!-- Video Controls Overlay -->
                    <div class="absolute top-4 right-4 flex gap-2">
                        <Button
                            :icon="videoExpanded ? 'pi pi-window-minimize' : 'pi pi-window-maximize'"
                            rounded
                            text
                            class="bg-black/50 text-white hover:bg-black/70"
                            @click="toggleVideoSize"
                            v-tooltip.left="videoExpanded ? 'Diminuir vídeo' : 'Expandir vídeo'"
                        />
                        <Button
                            icon="pi pi-cog"
                            rounded
                            text
                            class="bg-black/50 text-white hover:bg-black/70"
                        />
                    </div>
                </div>

                <!-- Content Area -->
                <div 
                    :class="[
                        'flex-1 overflow-y-auto bg-surface-50 dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 content-area',
                        videoExpanded ? 'h-[calc(100vh-448px)]' : 'h-[calc(100vh-384px)]'
                    ]"
                >
                    <div class="max-w-4xl mx-auto p-6">
                        <!-- Topic Header -->
                        <div class="mb-6">
                            <div class="flex items-center justify-between mb-4">
                                <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">
                                    {{ currentTopic?.title }}
                                </h1>
                                <div class="flex items-center gap-2">
                                    <Button
                                        icon="pi pi-step-backward"
                                        rounded
                                        outlined
                                        size="small"
                                        @click="goToPreviousTopic"
                                        :disabled="currentTopicIndex === 0"
                                    />
                                    <Button
                                        icon="pi pi-step-forward"
                                        rounded
                                        outlined
                                        size="small"
                                        @click="goToNextTopic"
                                        :disabled="currentTopicIndex >= (retriviedData?.topics?.length - 1)"
                                    />
                                    <Button
                                        label="Marcar como Concluída"
                                        icon="pi pi-check"
                                        size="small"
                                        @click="markAsComplete(currentTopic?.id)"
                                    />
                                </div>
                            </div>

                            <!-- Progress Bar -->
                            <div class="mb-4">
                                <div class="flex items-center justify-between mb-2 text-sm text-surface-600 dark:text-surface-400">
                                    <span>Progresso da aula</span>
                                    <span>{{ Math.round((currentTopicIndex + 1) / retriviedData?.topics?.length * 100) }}%</span>
                                </div>
                                <ProgressBar 
                                    :value="Math.round((currentTopicIndex + 1) / retriviedData?.topics?.length * 100)" 
                                    class="h-2"
                                />
                            </div>
                            
                            <!-- Video Info -->
                            <div v-if="currentTopic?.video_url" class="mb-4 p-3 bg-surface-100 dark:bg-surface-700 rounded-lg">
                                <div class="flex items-center justify-between text-sm">
                                    <div class="flex items-center gap-4">
                                        <span class="flex items-center gap-1">
                                            <i class="pi pi-clock text-primary-500"></i>
                                            <span class="text-surface-700 dark:text-surface-300">
                                                {{ videoDuration ? formatDuration(videoDuration) : 'Carregando...' }}
                                            </span>
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="pi pi-video text-primary-500"></i>
                                            <span class="text-surface-700 dark:text-surface-300">MP4</span>
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span v-if="videoLoading" class="flex items-center gap-1 text-orange-600">
                                            <i class="pi pi-spin pi-spinner"></i>
                                            <span class="text-xs">Buffering...</span>
                                        </span>
                                        <span v-else class="flex items-center gap-1 text-green-600">
                                            <i class="pi pi-check-circle"></i>
                                            <span class="text-xs">Pronto</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Topic Description -->
                        <div class="mb-8">
                            <div class="flex items-center gap-2 mb-4">
                                <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">
                                    Sobre esta aula
                                </h3>
                                <Button
                                    :icon="showDescription ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
                                    text
                                    rounded
                                    size="small"
                                    @click="showDescription = !showDescription"
                                />
                            </div>
                            <div v-if="showDescription || !currentTopic?.description" class="prose dark:prose-invert max-w-none bg-surface-0 dark:bg-surface-700 p-4 rounded-lg border border-surface-200 dark:border-surface-600">
                                <p class="text-surface-800 dark:text-surface-100 leading-relaxed whitespace-pre-line font-medium">
                                    {{ currentTopic?.description || currentTopic?.content || 'Nenhuma descrição disponível para esta aula.' }}
                                </p>
                            </div>
                        </div>

                        <!-- Additional Resources -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Notes Section -->
                            <Card class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700">
                                <template #title>
                                    <div class="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                        <i class="pi pi-file-edit text-indigo-600 dark:text-indigo-400 text-lg"></i>
                                        <span class="font-bold">Minhas Anotações</span>
                                    </div>
                                </template>
                                <template #content>
                                    <div class="space-y-3">
                                        <Textarea
                                            v-model="notes"
                                            placeholder="Faça suas anotações sobre esta aula..."
                                            rows="4"
                                            class="w-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                                        />
                                        <Button
                                            label="Salvar Anotações"
                                            icon="pi pi-save"
                                            size="small"
                                            class="bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white font-medium"
                                        />
                                    </div>
                                </template>
                            </Card>

                            <!-- Course Info -->
                            <Card class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700">
                                <template #title>
                                    <div class="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                        <i class="pi pi-info-circle text-cyan-600 dark:text-cyan-400 text-lg"></i>
                                        <span class="font-bold">Informações do Curso</span>
                                    </div>
                                </template>
                                <template #content>
                                    <div class="space-y-4">
                                        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700">
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-book text-blue-600 dark:text-blue-400"></i>
                                                <span class="text-blue-900 dark:text-blue-100 font-semibold">Total de aulas:</span>
                                            </div>
                                            <span class="font-bold text-xl text-blue-900 dark:text-blue-100 bg-white dark:bg-blue-800 px-3 py-1 rounded-full">{{ retriviedData?.topics?.length || 0 }}</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-700">
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-clock text-green-600 dark:text-green-400"></i>
                                                <span class="text-green-900 dark:text-green-100 font-semibold">Duração total:</span>
                                            </div>
                                            <span class="font-bold text-xl text-green-900 dark:text-green-100 bg-white dark:bg-green-800 px-3 py-1 rounded-full">{{ retriviedData?.duration || 'Variável' }}</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg border border-purple-200 dark:border-purple-700">
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-calendar text-purple-600 dark:text-purple-400"></i>
                                                <span class="text-purple-900 dark:text-purple-100 font-semibold">Criado em:</span>
                                            </div>
                                            <span class="font-bold text-xl text-purple-900 dark:text-purple-100 bg-white dark:bg-purple-800 px-3 py-1 rounded-full">{{ moment(retriviedData?.created_at).format('DD/MM/YYYY') }}</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg border border-orange-200 dark:border-orange-700">
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-refresh text-orange-600 dark:text-orange-400"></i>
                                                <span class="text-orange-900 dark:text-orange-100 font-semibold">Última atualização:</span>
                                            </div>
                                            <span class="font-bold text-xl text-orange-900 dark:text-orange-100 bg-white dark:bg-orange-800 px-3 py-1 rounded-full">{{ moment(retriviedData?.updated_at).format('DD/MM/YYYY') }}</span>
                                        </div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Chat -->
        <!-- <FloatingChat /> -->
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.prose {
    max-width: none;
}

.prose p {
    margin-bottom: 1em;
    line-height: 1.6;
}

/* Custom scrollbar for sidebar */
.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 2px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #4a5568;
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Video player enhancements */
video {
    background-color: #000;
    border-radius: 0;
}

video::-webkit-media-controls-panel {
    background-color: rgba(0, 0, 0, 0.8);
}

video::-webkit-media-controls-play-button {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
}

video::-webkit-media-controls-current-time-display,
video::-webkit-media-controls-time-remaining-display {
    color: white;
    text-shadow: none;
}

/* Video player container styles */
.video-player-container {
    position: relative;
    background: #000;
    height: 320px;
}

.video-player-container video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
}

/* Hover effects */
.cursor-pointer:hover {
    transform: translateY(-1px);
}

/* Video area - prevent hover effects on video container */
.video-player-container:hover,
.video-player-container video:hover {
    transform: none !important;
    filter: none !important;
    opacity: 1 !important;
}

/* Prevent hover effects on video player area */
.video-player-container *:hover {
    transform: none !important;
    filter: none !important;
}

/* Content area improvements */
.prose {
    max-width: none;
}

.prose p {
    margin-bottom: 1em;
    line-height: 1.6;
    color: inherit;
}

/* Content area scroll improvements */
.content-area {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;
}

.content-area::-webkit-scrollbar {
    width: 6px;
}

.content-area::-webkit-scrollbar-track {
    background: transparent;
}

.content-area::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
}

.dark .content-area::-webkit-scrollbar-thumb {
    background: #4a5568;
}

/* Video player container transitions */
.video-player-container {
    transition: height 0.3s ease-in-out;
}

/* Enhanced contrast for better readability */
.text-surface-800 {
    color: rgb(31 41 55) !important;
}

.dark .text-surface-100 {
    color: rgb(243 244 246) !important;
}

/* Card content styling */
.p-card .p-card-body {
    background: var(--surface-0);
    border: 1px solid var(--surface-200);
}

.dark .p-card .p-card-body {
    background: var(--surface-700);
    border: 1px solid var(--surface-600);
}

/* Course info styling enhancements */
.course-info-item {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.course-info-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.dark .course-info-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Ensure text visibility in cards */
.p-card .p-card-title {
    color: var(--text-color) !important;
    font-weight: 600;
}

.p-card .p-card-content {
    color: var(--text-color) !important;
}

/* Override Tailwind colors for better visibility */
.text-blue-900 {
    color: #1e3a8a !important;
}

.dark .text-blue-100 {
    color: #dbeafe !important;
}

.text-green-900 {
    color: #14532d !important;
}

.dark .text-green-100 {
    color: #dcfce7 !important;
}

.text-purple-900 {
    color: #581c87 !important;
}

.dark .text-purple-100 {
    color: #f3e8ff !important;
}

.text-orange-900 {
    color: #9a3412 !important;
}

.dark .text-orange-100 {
    color: #fed7aa !important;
}

/* Focus states */
.cursor-pointer:focus {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
}
</style>
