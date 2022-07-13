<template>
    <div class="pageTitle">
        <span class="title">{{ course.name }}</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
    <div class="content">
            <div class="container">
                <modules-component/>>
                <div class="right">
                    <div class="content">
                        <player-component/>
                        <supports-lesson/>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { useStore } from 'vuex'
import ModulesComponent from '@/views/modules/components/Modules.vue'
import PlayerComponent from '@/views/modules/components/Player.vue'
import SupportsLesson from '@/views/modules/components/Supports.vue'
import { computed } from '@vue/runtime-core'

export default {
    name: 'ModulesAndLessons',

    setup() {
        const store = useStore()

        const course = computed(() => store.state.courses.courseSelected)

        return {
            course
        }
    },

    components: {
        ModulesComponent,
        PlayerComponent,
        SupportsLesson
    }
}
</script>