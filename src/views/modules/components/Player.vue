<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
                <img src="images/icons/laravel.svg" alt="">
            </span>
            <span class="title">{{ lesson.name }}</span>
            <router-link :to="{name: 'ead.home'}" class="btn laravel">
                <i class="fas fa-chevron-left"></i>
                Voltar
            </router-link>
        </div>
        <iframe v-show="lesson.video" width="100%" height="auto" :src="'https://www.youtube.com/embed/' + lesson.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'PlayerComponent',

    setup () {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        return {
            lesson
        }
    }
}
</script>