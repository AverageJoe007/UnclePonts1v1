<template>
    <div id="land">

            <div id="title">
            <img alt="App logo" src="./assets/Bilgewater_2018.png">
            <h1>{{title}}</h1>
            </div>

        <br>
        <br>

        <div id="arena">

            <div id="us">
            <us></us>
            </div>

            <div id="them">
            <them></them>
            </div>

        </div>

    </div>
</template>



<script>
import Champ from './components/Champion.vue'

export default {
    components: {
        'us': Champ,
        'them': Champ
    },
    data() {
        return {
            title: 'Uncle Pont\'s 1v1 Calculator'
        }
    },
}
</script>



<style lang="scss">
h1 { color: #FFD700 }

#land {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

#title {
    text-align: center;
}

#title img {
    height: 180px;
    width: auto;
}

#arena {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: flex-start;
}

#us {
    flex-basis: 400px;
}

#them {
    flex-basis: 400px;
}

/* #arena {
    display: grid;
    grid-template-columns: 50px 1fr 50px 1fr 50px;
    grid-template-areas:
    ". us . them .";
    grid-gap: 10px;
}

#us {
    grid-area: us;    
}

#them {
    grid-area: them;
} */
</style>