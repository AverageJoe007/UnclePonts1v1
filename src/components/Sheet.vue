<template>
    <div class="Sheet">
        
        <div>
            <h4><label>Level: </label>
            <input v-model.number="level" type="number" min="1" max="18" step="1" value="1" size="12"></h4>

            <!-- <h4>Stats: </h4>  -->
        <div>
            <table>
                <tr>
                    <td style="text-align:right"> HP: </td>
                    <td></td>
                    <td> {{ currentHP }} </td>
                </tr>
                <tr>
                    <td style="text-align:right"> MP: </td>
                    <td></td>
                    <td> {{ currentMP }} </td>
                </tr>
                <br>
                  <tr>
                    <td style="text-align:right"> HP regen: </td>
                    <td></td>
                    <td> {{ currentHpRegen }} </td>
                </tr>
                  <tr>
                    <td style="text-align:right"> MP regen: </td>
                    <td></td>
                    <td> {{ currentMpRegen }} </td>
                </tr>
                <br>
                  <tr>
                    <td style="text-align:right"> Armor: </td>
                    <td></td>   
                    <td> {{ currentArmor }} </td>
                </tr>
                  <tr>
                    <td style="text-align:right"> Spell Block: </td>
                    <td></td>
                    <td> {{ currentSpellBlock }} </td>
                </tr>
                <br>
                  <tr>
                    <td style="text-align:right"> Crit: </td>
                    <td></td>
                    <td> {{ currentCrit }} </td>
                </tr>
                  <tr>
                    <td style="text-align:right"> Attack Dmg </td>
                    <td></td>
                    <td> {{ currentAttackDamage }} </td>
                </tr>
                <tr>
                    <td style="text-align:right"> Attack Spd </td>
                    <td></td>
                    <td> {{ currentAttackSpeed }} </td>
                </tr>
            </table>
        </div>

        <!-- <div clas="inv">
            <table>
                <tr>
                    <td></td>
                </tr>

            </table> -->
        </div>

        <br>
        <br>

        <span>
            <label> Inventory Slot 1 </label>
            <select v-model="item_1" @change="onChange()">
                <option v-for="item in itemList" :value="item.name" :key="item.index"> {{ item.name }} </option>
                    </select>
            
        </span>

        <button v-on:click="showConsole"> Show item list </button>

    </div>
</template>


<script>
import {riotAPI} from '../main.js'

export default {
    props: ['champ'],
    
    data() {
        return {  
            level: 1,
            tempList: null,
            itemList: null,
            item_1_id: null,
            item_1: null,
        }
    },

    methods: {
        showConsole() {
            console.log(this.itemList[0].maps[1]);
        },
                
/*         filterToSR() {
            return itemList.index.maps[1] = true;
        }, */


        onChange() {
            // console.log(item_1_id);
            this.item_1 = this.item;
            // console.log(this.champ);
        }
    },

    computed: {
        currentHP: function() {
            return this.champ.stats.hp + ((this.level -1 ) * this.champ.stats.hpperlevel);
        },
        currentMP: function() {
            return this.champ.stats.mp + ((this.level -1 ) * this.champ.stats.mpperlevel);
        },
        currentArmor: function() {
            return (this.champ.stats.armor + ((this.level -1 ) * this.champ.stats.armorperlevel)).toFixed(3);
        },
        currentSpellBlock: function() {
            return (this.champ.stats.spellblock + ((this.level -1 ) * this.champ.stats.spellblockperlevel)).toFixed(3);
        },
        currentHpRegen: function() {
            return (this.champ.stats.hpregen + ((this.level -1 ) * this.champ.stats.hpregenperlevel)).toFixed(3);
        },
        currentMpRegen: function() {
            return (this.champ.stats.mpregen + ((this.level -1 ) * this.champ.stats.mpregenperlevel)).toFixed(3);
        },
        currentCrit: function() {
            if(this.champ.stats.crit == 0)
            {
                return '';
            }
            else return this.champ.stats.crit + ((this.level -1 ) * this.champ.stats.critlevel);
        },
        currentAttackDamage: function() {
            return (this.champ.stats.attackdamage + ((this.level -1 ) * this.champ.stats.attackdamageperlevel)).toFixed(3);
        },
        currentAttackSpeed: function() {
            return (this.champ.stats.attackspeed + ((this.level -1 ) * this.champ.stats.attackspeedperlevel)).toFixed(3);
        },
    },

  

    created() {        
        this.axios
            .get(riotAPI.curPatch + 'data/en_US/item.json')     
            // .then(response => console.log(response.data));
            .then(response => (this.itemList = response.data.data))
            // .then(this.tempList = this.itemList.filterToSR()));
    }
}

</script>


<style lang="scss">

table tr td:empty {
    width: 20px;
}

</style>