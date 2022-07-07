<template>
    <div>
        <header-component/>

        <section>
            <router-view></router-view>
        </section>

        <footer-component/>
    </div>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import HeaderComponent from './components/headerComponent.vue'
import FooterComponent from './components/footerComponent.vue'

export default {
    name: 'TemplateDefault',
    setup(){
        onBeforeMount(() => {
            document.body.classList.add('page')
            document.body.classList.add('dark')

            document.title = 'Curso EAD com Vue.js 3'
        })
    },
    components:{
        HeaderComponent,
        FooterComponent,
    }
}
</script>