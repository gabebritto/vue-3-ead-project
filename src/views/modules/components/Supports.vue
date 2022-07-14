<template>
    <div class="comments" v-show="lesson.name">
        <div class="header">
            <span class="title">Dúvidas ({{supports.length}})<span v-if="loading">(Carregando...)</span></span>
            <button class="btn primary"
                @click.prevent="modal.showModal=true">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>
        <supports-global/>

        <modal-support
        :showModal="modal.showModal"
        :supportReply="modal.supportReply"
        @closeModal="modal.showModal = false"
        />


    </div>
</template>

<script>
import SupportsGlobal from '@/components/Supports.vue'
import ModalSupport from '@/components/SupportModal.vue'

import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
export default {
    name: 'SupportsLesson',
    
    setup() {

        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)
        const supports = computed(() => store.state.supports.supports.data)
        const loading = ref(false)

        const modal = ref({
            showModal: false,
            supportReply: ''
        })

        watch(
            () => store.state.courses.lessonPlayer,
            () => {
                loading.value = true
                store.dispatch('getSupportsWithLessonId', lesson.value.id)
                        .finally(loading.value = false)
                }
            )
        
        return {
            lesson,
            loading,
            supports,
            ModalSupport,
            modal
        }

    },

    components: {
        SupportsGlobal
    }
}
</script>