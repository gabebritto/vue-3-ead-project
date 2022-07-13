<template>
    <div class="left">
        <div class="card">
            <div class="title bg-laravel">
                <span class="text">Modulos</span>
                <span class="icon far fa-stream"></span>
            </div>
            <div class="modules" v-for="module in modules" :key="module.id">
                <div class="name">
                    <span class="text">{{module.name}}</span>
                    <span class="icon fas fa-sort-down"></span>
                </div>
                <ul class="classes" v-for="lesson in module.lessons" :key="lesson.id">
                    <li class="active">
                        <span class="nameLesson">{{lesson.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
    name: 'ModulesComponent',

    setup() {
        const store = useStore()

        const course = computed(() => store.state.courses.courseSelected)
        const modules = computed(() => store.state.courses.courseSelected.modules)

        return {
            course,
            modules
        }
    },
}
</script>