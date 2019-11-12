<template>
    <div class="champFrame">

        <div v-if="showSelect" class="champSelect">
            <h2> Choose your Champion: </h2>            
                <span class="dropDown">     
                    <label> &#8594; </label>
                    <select v-model="id" @change="onChange()">
                    <option v-for="champion in champinfo" :value="champion.id" :key="champion.id"> {{ champion.name }} </option>
                    </select>
                </span>
        </div>

        <div v-if="showChamp" class="champDisplay">
            <div class="champInfo">
            <img :src="getImgURL" :alt="champ.name">
            <h2> {{ champ.name }} </h2>
            <h3> {{ champ.title }} </h3>
            </div>
            <!-- <div class="lore" v-html="champ.blurb"> </div> -->
            <div class="champCalc">
            <Sheet :champ=this.champ />
            </div>
        </div>

      </div>
</template>


<script>
import {riotAPI} from '../main.js'

// import stats component
import Sheet from './Sheet.vue'

export default {
    // add components statement
    components: {
        Sheet
    },

    data() {
        return {
            id: '',
            champinfo: null,
            champ: null,
            showSelect: true,
            showChamp: false,
            riotURL: riotAPI.curPatch
        }
    },

    methods: {
        onChange() {
            // console.log(this.id);
            this.champ = this.champinfo[this.id],
            // console.log(this.champ);
            this.showSelect = false,
            this.showChamp = true
        },
    },

    computed: {
        getImgURL: function() {
            return this.riotURL + 'img/champion/' + this.champ.id + '.png';
        }
    },

    created() {
        this.axios
            .get(riotAPI.curPatch + 'data/en_US/champion.json')
            .then(response => (this.champinfo = response.data.data))
    }
}
</script>


<style scoped lang="scss">   

    .champFrame { padding: 5px; background-color: #999A9C; }

    .champSelect {
        h2 { margin-top: 5px; margin-bottom: 5px; color: black; text-align: center; }
    }

    .dropDown {
        padding-left: 20px;

    }

    .dropDown {
        label { text-align: center; width: 20% }
        select { text-align: center; width: 80% }
    }

/*     .champFrame {
        display: grid;
        grid-template-columns: 120px [image-end] 1fr 1fr;
        grid-template-rows: 60px [name-end] 60px [title-end] 1fr;
    }

    .champSelect {
        grid-row-start: 1;
        grid-row-end: title-end;
        grid-column-start: 1;
        grid-column-end: 4;
    }
  
    .champInfo {
        grid-row-start: 1;
        grid-row-end: title-end;
        grid-column-start: 1;
        grid-column-end: image-end;
    }

    .champInfo img {
        grid-row-start: 1;
        grid-row-end: title-end;
        grid-column-start: 1;
        grid-column-end: image-end;
    }

    .champInfo h2 {
      grid-row-start: 1;
      grid-row-end: name-end;
      grid-column-start: 2;
      grid-column-end: 4;
    }

    .champInfo h3 {
      grid-row-start: name-end;
      grid-row-end: title-end;
      grid-column-start: 2;
      grid-column-end: 4;
    }

    .champCalc {
        grid-row-start: title-end;
        grid-column-start: 1;
    } */
 
</style>