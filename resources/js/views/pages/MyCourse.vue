<script setup lang="ts">
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import FooterWidget from '@/components/landing/FooterWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import PricingWidget from '@/components/landing/PricingWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import FloatingChat from '@/components/FloatingChat.vue';

import Carousel from "primevue/carousel";
import axios from "axios";
import { onBeforeMount, reactive, ref, onMounted, watch } from "vue";

const isLoadingDiv = ref(true);

const searchQuery = ref("");
const courses = ref([]);
const user = ref(null);
const responsiveOptions = [
    {
        breakpoint: "1024px",
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: "768px",
        numVisible: 1,
        numScroll: 1,
    },
];

const formatPrice = (value) => {
    return value.toLocaleString("pt-MZ", {
        style: "currency",
        currency: "MZN",
    });
};

const getData = async (page = 1) => {
    axios
        .get(`/api/mycourse`, {
            params: {
                query: searchQuery.value,
            },
        })
        .then((response) => {
            courses.value = response.data.courses;

            // console.log(courses.value);
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

onMounted(() => {
      user.value = JSON.parse(localStorage.getItem('user'));

    getData();
});


</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                <TopbarWidget />
            </div>
               <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="text-center mt-20 mb-6">
            <h2
                class="text-surface-900 dark:text-surface-0 font-semibold text-4xl"
            >
                Cursos
            </h2>
        </div>

        <Carousel
            :value="courses"
            :numVisible="3"
            :numScroll="1"
            circular
            :responsiveOptions="responsiveOptions"
            :itemStyle="{ marginRight: '1rem' }"
        >
            <template #item="slotProps">
                <div
                    class="bg-white dark:bg-surface-900 rounded-xl shadow-md overflow-hidden h-full flex flex-col"
                >
                    <img
                        :src="
                            slotProps.data.cover_image
                                ? 'storage/' + slotProps.data.cover_image
                                : '/logo.png'
                        "
                        alt="Capa do curso"
                        class="h-40 w-full object-cover"
                    />
                    <div class="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h5
                                class="text-lg font-semibold text-surface-900 dark:text-surface-0 mb-1"
                            >
                                {{ slotProps.data.title }}
                            </h5>
                            <p
                                class="text-sm text-surface-600 dark:text-surface-200 mb-2"
                            >
                                {{ slotProps.data.description }}
                            </p>
                        </div>
                        <div class="mt-4">
                            <p
                                class="text-base font-bold text-primary-600 dark:text-primary-400 mb-2"
                            >
                                <!-- {{ formatPrice(slotProps.data.price) }} -->
                            </p>
                            <router-link :to="'/takecourse/' + slotProps.data.id">
                                <button
                                    class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full transition-all">
                                    Aceder
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
            <FooterWidget />
            <!-- <FloatingChat /> -->
        </div>
    </div>
</template>
