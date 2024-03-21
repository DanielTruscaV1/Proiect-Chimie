<script setup>
    import {ref} from "vue";

    const theme = ref();

    function change_theme()
    {
        if(theme.value == 2)
        {
            document.documentElement.style.setProperty('--color11', 'rgb(30, 30, 40)');
            document.documentElement.style.setProperty('--color12', 'rgb(60, 60, 70)');
            document.documentElement.style.setProperty('--font_color11', 'white');
            localStorage.setItem('theme', 'black');
        }
        else if(theme.value == 1)
        {
            document.documentElement.style.setProperty('--color11', '#dddddd');
            document.documentElement.style.setProperty('--color12', 'white');
            document.documentElement.style.setProperty('--font_color11', 'black');
            localStorage.setItem('theme', 'white');
        }
    }

    import {onMounted, onUnmounted } from 'vue';
    import EventBus from '../EventBus.js';

    const localStorageValue = ref(localStorage.getItem('theme') || '');

    onMounted(() => {
    EventBus.on('localStorageChanged', handleLocalStorageChange);
    });

    onUnmounted(() => {
    EventBus.off('localStorageChanged', handleLocalStorageChange);
    });

    const handleLocalStorageChange = (newValue) => {
    localStorageValue.value = newValue;
    };
</script>

<template>
    <div id="header">

    </div>
    <div id="image">

    </div>
    <div id="name">
        <h1>
            Daniel Trusca
        </h1>
        <h2>
            #123
        </h2>
    </div>  
    <div id="settings">
        <h1>
            Setări
        </h1>
        <select @change="change_theme" v-model="theme">
            <option value="1">
                Temă luminoasă
            </option>
            <option value="2">
                Temă întunecată
            </option>
        </select>
    </div>
    
</template>

<style scoped>
    #image 
    {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    #name 
    {
        position:absolute;
    }
    select 
    {
        width:300px;
        height:50px;
        font-size:16px;
        background-color:var(--color12);
        color:var(--font-color11);
        border-radius:10px;
        border:2px solid rgb(100, 100, 100);
        padding-left:10px;
    }
    @media screen and (min-width:1000px)
    {
        #header 
        {
            width:100vw;
            height:30vh;
            background-color: pink;
        }
        #image 
        {
            position:absolute;
            left:10vh;
            top:10vh;
            width:30vh;
            height:30vh;
            border-radius:50%;
            background-color:white;
            z-index:2;
        }
        #name
        {
            top:43vh;
            left:15vh;
        }
        #settings 
        {
            position:absolute;
            top:44vh;
            left:50vh;
        }
    }
    @media screen and (max-width:1000px)
    {
        #header 
        {
            width:100vw;
            height:30vh;
            background-color: pink;
        }
        #image 
        {
            position:absolute;
            left:calc(50vw - 15vh);
            top:10vh;
            width:30vh;
            height:30vh;
            border-radius:50%;
            background-color:white;
            z-index:2;
        }
        #name
        {
            top:40vh;
            width:100%;
            text-align:center;
        }
        #settings 
        {
            position:absolute;
            top:55vh;
            left:10vw;
        }
    }
    
</style>