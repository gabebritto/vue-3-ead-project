<template>
    <div class="pageTitle">
        <span class="title">Minhas Dúvidas</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li :class="{active: status === ''}" @click="getMySupportsWithStatus('')">Todos</li>
                <li :class="{active: status === 'A'}" @click="getMySupportsWithStatus('A')">Aguardando Minha Resposta</li>
                <li :class="{active: status === 'P'}" @click="getMySupportsWithStatus('P')">Aguardando Professor</li>
                <li :class="{active: status === 'C'}" @click="getMySupportsWithStatus('C')">Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
          <div class="right">
              <div class="content">
                <div class="comments">
                    <supports-global/>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import SupportsGlobal from '@/components/Supports.vue'

export default {
  name: 'MySupports',
  setup() {
    const store = useStore()
    const status = ref('')

    const getMySupportsWithStatus = (newStatus) => {
        status.value = newStatus

        store.dispatch('getMySupports', status.value)
    }

    onMounted(() => store.dispatch('getMySupports', status.value))

    return {
      getMySupportsWithStatus,
      status
    }
  },
  components: {
    SupportsGlobal
  }
}
</script>
