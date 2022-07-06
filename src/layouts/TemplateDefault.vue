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
import HeaderComponent from './components/headerComponent.vue'
import FooterComponent from './components/footerComponent.vue'

export default {
    name: 'TemplateDefault',
    components:{
        HeaderComponent,
        FooterComponent,
        
    }
}
</script>