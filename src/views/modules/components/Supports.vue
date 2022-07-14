<template>
    <div class="comments" v-show="lesson.name">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>
        <supports-global/>


    </div>
</template>

<script>
import SupportsGlobal from '@/components/Supports.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    name: 'SupportsLesson',
    
    setup() {

        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        return {
            lesson
        }

    },

    components: {
        SupportsGlobal
    }
}
</script>