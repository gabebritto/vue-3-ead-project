<template>
    <div class="left">
        <div class="card">
            <div class="title bg-laravel">
                <span class="text">Modulos</span>
                <span class="icon far fa-stream"></span>
            </div>
            <div :class="['modules', module.id == showModule ? 'active' : '']" v-for="module in modules" :key="module.id" @click.prevent="toggleModule(module.id)">
                <div class="name">
                    <span class="text">{{module.name}}</span>
                    <span class="icon fas fa-sort-down"></span>
                </div>
                <ul class="classes" v-show="module.id == showModule">
                    <li 
                    v-for="lesson in module.lessons" 
                    :key="lesson.id" 
                    @click.prevent="addLessonInPlayer(lesson)">
                        <span v-if="lesson.views.lenght > 0" class="check active fas fa-check" ></span>
                        <span class="nameLesson">{{lesson.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from '@vue/runtime-core'

export default {
    name: 'ModulesComponent',

    setup() {
        const store = useStore()
        const showModule = ref('0')

        const course = computed(() => store.state.courses.courseSelected)
        const modules = computed(() => store.state.courses.courseSelected.modules)
        const toggleModule = (moduleId) => showModule.value = moduleId

        const addLessonInPlayer = (lesson) => {
            store.commit('SET_LESSON_PLAYER', lesson)
        }

        return {
            course,
            modules,
            showModule,
            toggleModule,
            addLessonInPlayer
        }
    },
}
</script>