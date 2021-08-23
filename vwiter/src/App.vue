<template>
  <div>

    <header>
      <router-link to='/profile' class="icon"><i class="fas fa-user"></i></router-link>
      <h1>{{ $route.name }}</h1>
    </header>

    <router-view class="view" />

    <footer>
      <Navbar class="navbar" />
    </footer>

  </div>
</template>




<script>
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {Navbar},
}

</script>




<style lang="scss">

  $background-color: #15202B;
  $subtitle-color: #6E767D;
  $primary-color: #3EAF7C;

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: $background-color;
    color: white;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header{
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    border-bottom: 1px solid $subtitle-color;
    font-size: .7rem;

    h1{
      margin: 1rem;
    }
    .icon{
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
      margin: 1rem;
    }
  }

  .view{
    position: relative;
    height: 100%;
    width: 90%;
  }

  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    border-top: 1px solid $subtitle-color;
  }

  a.router-link-active i{
    color: $primary-color;
  }


</style>
