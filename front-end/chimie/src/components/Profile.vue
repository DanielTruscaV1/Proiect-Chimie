<script setup>

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
    }
    
</style>