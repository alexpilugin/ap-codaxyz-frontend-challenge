<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="margin: 48px;">

    <sweet-modal ref="gameModal" @close="hideModal">
      <game-detail :id="gameId" :name="gameName" :key="compKey"/>
    </sweet-modal>

    <h2>Modals</h2>

    <br>

    <button class="cp" @click.prevent="showModal('Basketball Game', '2323')">
      Show Basketball Game
    </button>

    <br>

    <button class="cp" @click.prevent="showModal('Racing Game', '2424')">
      Show Racing Game
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import GameDetail from '@/components/GameDetail.vue'

export default {
  name: 'Home',
  components: {
    GameDetail,
  },
  data() {
    return {
      gameId: '',
      gameName: '',
      compKey: 0
    }
  },
  methods: {
    // method runs when modal opened
    showModal(name, id) {
      this.gameName = name;
      this.gameId = id;
      this.compKey++;

      this.$refs.gameModal.open()
      ///game/2323?name=Basketball%20Game
      //this.$router.push({ path: `/game/${id}?name=${name}` })
      //this.$router.replace(`/game/${id}?name=${name}`)
      //this.$router.push({ name: 'Game', params: { id }, query: { name } })

      setTimeout(function(){ 
        window.history.pushState({name, id}, "Game", `/game/${id}?name=${name}`);
      }, 200);
      
    },
    // method runs when modal closed
    hideModal() {
      window.history.pushState(null, "Home", `/`);
    },
  },
}
</script>

<style>
.home {
  display: grid;
  justify-content: center;
}
</style>
