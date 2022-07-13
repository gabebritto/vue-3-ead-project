<template>
    <li>
        <span :class="['card', 'bg-' + bgName]">
            <span class="icon">
                <img :src="[course.image != '' ? course.image: require('@/assets/images/logo.png')]" :alt="course.name" />
            </span>
            <span class="title">{{ course.name }}</span>
            <span class="action">
                <!-- <a href="trainings.html" :class="['btn', bgName]">Acessar</a> -->
                <!-- <router-link :to="{name: 'ead.modulos'}" :class="['btn', bgName]" >
                    Acessar
                </router-link> -->
                <a href="#" @click.prevent="setCourse" :class="['btn', bgName]">Acessar</a> 
            </span>
        </span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </li>
</template>

<script>
import {useStore} from 'vuex'
import router from '@/router'

export default {
    name: 'card-course',
    props: ['course', 'bgName'],

    setup(props) {

        const store = useStore()

        const setCourse = () => {
            store.commit('SET_COURSE_SELECTED', props.course)

            router.push({name: 'ead.modulos'})
        
        }

        return {
            setCourse
        }
    }
};
</script>