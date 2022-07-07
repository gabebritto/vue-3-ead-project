<template>
    <div class="pageTitle">
        <span class="title">LaraFood</span>
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
import ModulesComponent from '@/views/modules/components/Modules.vue'
import PlayerComponent from '@/views/modules/components/Player.vue'
import SupportsLesson from '@/views/modules/components/Supports.vue'
export default {
    name: 'ModulesAndLessons',
    components: {
        ModulesComponent,
        PlayerComponent,
        SupportsLesson
    }
}
</script>