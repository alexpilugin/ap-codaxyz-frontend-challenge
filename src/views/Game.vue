<template>
  <div>
    <h1 style="margin: 48px 0 24px;">Game Page</h1>

    <game-detail :id="$route.params.id" :name="$route.query.name" />
  </div>
</template>

<script>
import GameDetail from '@/components/GameDetail.vue';

export default {
  components: {
    GameDetail,
  }
}
</script>
