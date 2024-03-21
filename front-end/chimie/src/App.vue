<script setup>
  import {ref} from "vue";

  const show_menu = ref(false);

  function toggle_menu()
  {
    show_menu.value = !show_menu.value;
  }

  import {useRouter} from "vue-router";

  const router = useRouter();

  function go_to(path)
  {
    router.push(`${path}`);
  }
  
</script>

<template>
  <button id="menu-button" @click="toggle_menu">
    <i class="material-icons" style="font-size:60px">menu</i>
  </button>
  <section id="menu" v-if="show_menu">
    <button>
      <img src="../src/assets/icons5.png"/>
    </button>
    <button>
      <img src="../src/assets/icons4.png"/>
    </button>
    <button>
      <img src="../src/assets/icons3.png"/>
    </button>
    <button>
      <img src="../src/assets/icons2.png"/>
    </button>
    <button @click="go_to('profile')">
      <img src="../src/assets/icons1.png"/>
    </button>
  </section>
  <RouterView/>
</template>

<style scoped>
  #navigation
  {
    width:100vw;
    height:10vh;
    background-color:red;
  }
  #menu 
  {
    position:absolute;
    right:2vw;
    top:10vh;
    width:6vw;
    height:87vh;
    /* From https://css.glass */
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
  }
  button img 
  {
    width:6vh;
    height:6vh;
  }
  #menu button 
  {
    width:100%;
    margin-top:9.5vh;
    background:transparent;
    border:none;
    border-radius:20px;
  }
  @media screen and (min-width: 1000px)
  {
    /*
    Pentru desktop
    */
    #menu-button 
    {
      position:absolute;
      padding:0px;
      right:calc(5vw - 30px);
      top:2vh;
      width:60px;
      background:transparent;
      border:none;
      cursor:pointer;
    }
    #navigation 
    {
      display:none;
    }
    
  }
  @media screen and (max-width: 1000px)
  {
    /*
    Pentru telefon
    */
    #menu-button
    {
      display:none;
    }
    #navigation 
    {
      position:absolute;
      bottom:0px;
    }
    #menu 
    {
      position:fixed;
      left:0vw;
      top:92vh;
      width:100vw;
      height:10vh;
      border-radius:0px;
    }
    #menu button 
    {
      width:12vw;
      height:80%;
      margin-top:0px;
      margin-left:7vw;
    }
    #menu button img 
    {
      width:40px;
      height:40px;
    }
  }
</style>
