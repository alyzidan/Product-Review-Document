<template>
  <div id="app">
      <main>
            <side-bar></side-bar>
              <transition name="fade">
                    <router-view />
              </transition>
      </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Sidebar from '@/components/partials/SideBar.vue';
  import SideBar from "@/components/partials/SideBar.vue";

  @Component({
      components: {
          SideBar,
          Sidebar,
      }
  })
  export default class App extends Vue {}


</script>