<script setup>
   
</script>

<template>
    <img id='logo1' src="../assets/logo2.png"/>
    <div id="container">
        <h1>
            Conectează-te!
        </h1>
        <p>
            Nume:
        </p>
        <input type="text"/>
        <br/>
        <p>
            Parolă:
        </p>
        <input type="password"/>
        <button id="continue">
            <img src="../assets/icons88.png"/>
        </button>
    </div>
</template>

<style scoped>
    #logo1 
    {
        position:absolute;
        top:2vh;
        left:6vw;
        width:500px;
        height:140px; 
    }
    h1 
    {
        margin-top:6vh;
        padding-left:5vw;
        font-size:40px;
        font-weight:600;
    }
    p 
    {
        width:100px;
        display:inline-block;
        padding-left:5vw;
        font-size:25px;
        font-weight:400;
    }
    input 
    {
        margin-left:3vw;
        width:300px;
        height:25px;
        font-size:16px;
    }
    #container 
    {
        position:absolute;
        top:20vh;
        left:10vw;
        width:50vw;
        height:50vh;
        background-color:var(--color12);
        border-radius:50px;
    }
    #continue 
    {
        position:absolute;
        width:100px;
        height:100px;
        border-radius:50%;
        border:2px solid var(--color12);
        top:17vh;
        right:8.5vw;
        background-color:#F3A03D;
        cursor:pointer;
    }
    #continue img 
    {
        padding-top:5px;
        padding-left:8px;
        width:70%;
        height:70%;
    }
</style>