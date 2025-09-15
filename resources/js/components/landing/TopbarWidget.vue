<script setup>
import { onBeforeMount, reactive, ref, onMounted, watch } from "vue";
import axios from "axios";
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';


const router = useRouter();
const user = ref(null)
function smoothScroll(id) {
    document.body.click();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

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

onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user'));
});
</script>

<template>
    <router-link class="flex items-center" to="/">
        <img src="/logo.png" class="w-20 h-12" alt="">
        <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20"></span>
    </router-link>
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
                <a @click="smoothScroll('hero')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a @click="smoothScroll('features')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Courses</span>
                </a>
            </li>
            <li>
                <a @click="smoothScroll('pricing')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
            <!-- <Button label="Login" text as="router-link" to="/auth/login" rounded></Button> -->
            <Button label="Login" text as="router-link" to="/auth/login" rounded v-if="!user"></Button>
            <div v-else>
                <Button label="Meus Cursos" text as="router-link" to="/my-courses" rounded ></Button>
                <Button label="Sair" text rounded @click="logout()"></Button>
            </div>
    </div></div>
</template>
