<template>
  <div id="app">
    <div id="nav">
      <h1>Links</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/game/2323?name=Basketball%20Game">&#127936; Basketball Game</router-link> |
      <router-link to="/game/2424?name=Racing%20Game">&#128663; Racing Game</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #F2F3F4;
  padding: 0 24px 24px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cp {
  cursor: pointer;
}
</style>
