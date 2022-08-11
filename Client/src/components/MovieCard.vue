<script>
export default {
  props: {
    title: String,
    overview: String,
    posterpath: String,
    loading: Boolean
  }
}
</script>

<template>
  <section id="movies">
    <div v-show="!loading">
      <figure>
        <img id="poster" :src="posterpath" />
      </figure>
      <aside id="info">
        <h2 id="title">{{title}}</h2>
        <p id="overview">{{overview}}</p>
        <div id="details">
          <p id="language"></p>
          <p id="average"></p>
        </div>
      </aside>
    </div>
    <div v-show="loading" id="loader"></div>
  </section>
  
</template>

<style>
  #movies{
    max-width: 80%;
    height: 354px;
    display: flex;
    align-items: center;
  }

  #movies > div{
    display: flex;
    column-gap: 30px;
  }

  #poster{
    border-radius: 8px;
    max-height: 350px;  
  }

  #info{
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    height: 354px;
    word-wrap: break-word;
    overflow-y: auto;
  }

  #details{
    display: none;
    background-color: #fff;
    opacity: 0.4;
    padding: 8px;
    border-radius: 4px;
  }

  #average{
    color: #000;
    font-weight: 700;
  }

  #loader {
    border: 24px solid #f3f3f3; /* Light grey */
    border-top: 24px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>