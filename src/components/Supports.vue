<template>
    <div class="content">
        <div class="card" v-for="support in supports.data" :key="support.id">
            <div class="commentContent main">
                <span class="avatar">
                    <img :src="[
                        support.user.image ?
                        support.user.image : '@/assets/images/avatars/user01.svg'
                    ]" 
                    :alt="support.user.name">
                </span>
                <span class="comment">
                    <div class="balloon">
                        <span class="fas fa-sort-down"></span>
                        <span class="owner">{{support.user.name}} - {{support.dt_updated}}</span>
                        <span class="text">{{support.description}}</span>
                    </div>
                </span>
                <button class="btn primary">Ver respostas</button>
            </div>
            <div class="answersContent">
                <div :class="['commentContent', {'rightContent' : support.user.id != reply.user.id}]" v-for="reply in support.replies" :key="reply.id">
                    <span class="avatar" v-if="support.user.id == reply.user.id">
                        <img :src="[
                            support.user.image ?
                            support.user.image : '@/assets/images/avatars/user01.svg'
                        ]" 
                        :alt="support.user.name">
                    </span>
                    <div class="comment">
                        <div class="balloon">
                            <span class="fas fa-sort-down"></span>
                            <span class="owner">{{reply.user.name}} - {{ reply.date}}</span>
                            <span class="text" v-text="reply.description"></span>
                        </div>
                    </div>
                    <span class="avatar" v-if="support.user.id != reply.user.id">
                        <img :src="[
                            support.user.image ?
                            support.user.image : '@/assets/images/avatars/user01.svg'
                        ]" 
                        :alt="support.user.name">
                    </span>
                </div>
                <span class="answer">
                    <button class="btn primary">Responder</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'SupportsGlobal',

    setup() {
        const store =  useStore()

        const supports = computed(() => store.state.supports.supports)

        return {
            supports
        }
    }

}
</script>