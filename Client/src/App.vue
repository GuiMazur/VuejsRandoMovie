<script>

import MovieCard from './components/MovieCard.vue';
import Header from './components/Header.vue';
import axios from 'axios';

export default{
    data() {
        return {
            movieInfo: {},
            loading: false
        }
    },
    methods: {
        async getMovieInfo() {
            this.loading = true;
            let response = await axios.get('http://localhost:3000');
            this.movieInfo = JSON.parse(response.data);
            this.loading = false;
        }
  
    },
    components: {
        Header, MovieCard    
    },

}

</script>

<template>

    <main>
        <Header />
        <MovieCard 
        :title="movieInfo.title"
        :overview="movieInfo.overview"
        :posterpath="movieInfo.imgSrc"
        :loading="loading"
        />
        <button 
            id="shuffle-button"
            @click="getMovieInfo"
        >
            <p>Encontre seu filme</p>
        </button>
        <footer>
            <p>Clique aqui...</p>
        </footer>
    </main>

</template>

<style>

    :root {
        --title: #fffcf9;
        --subtitle: #b3b3b3;
        --bg-button: #e9e6e3;
        --background: linear-gradient(43deg, #a9d3d3 0%, #0f5253 52%, #00082c 100%);
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        width: 100vw;
        height: 100vh;
        background-image: var(--background);
    }

    main > *{
        margin: 20px 0px 20px;
    }

    #shuffle-button{
        background-color: var(--bg-button);
        border: none;
        border-radius: 6px;
        height: 35px;
        padding: 25px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    #shuffle-button p{
        color: #000000;
        font-weight: 500;
        font-size: 17px;
    }

    #shuffle-button p::before{
        content: '';
        display: inline-block;
        background-image: url(src/assets/shuffle.svg);
        background-size: 30px 30px;
        width: 30px;
        height: 30px;
        margin-right: 15px;
        vertical-align: middle;
    }

</style>
