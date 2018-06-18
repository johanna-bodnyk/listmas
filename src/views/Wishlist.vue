<template>
    <div class="wishlist">
        <h2>My Wishlist</h2>

        <!-- Add new item -->
        <md-button 
            v-show="!showAddForm" 
            @click="showAddForm = true" 
            class="md-icon-button md-raised md-primary">
                <md-icon>add</md-icon>
        </md-button>
        <add-item v-show="showAddForm" @hide="showAddForm = false">
            <template slot="title">Add an item to your list</template>
            <template slot="submit-button-text">Add</template>
        </add-item>

        <!-- Wishlist -->
        <md-list class="md-triple-line">
            <span
                v-for="item in wishlistForCurrentUser"
                :key="item.listItemId">
                <md-list-item>
                    <div v-show="!showEditForm[item.listItemId]" class="md-list-item-text">
                        <span>{{item.name}}</span>
                        <span><a :href="item.link" target="_blank">{{item.link}}</a></span>
                        <p>{{priceToString(item.price)}} | {{item.description}}</p>
                    </div>
                    <md-button 
                        v-show="!showEditForm[item.listItemId]" 
                        @click="showEditForm[item.listItemId] = true" 
                        class="md-icon-button md-list-action">
                            <md-icon class="md-primary">edit</md-icon>
                    </md-button>
                    <add-item 
                        v-show="showEditForm[item.listItemId]" 
                        v-on:hide="showEditForm[item.listItemId] = false">
                            <template slot="title">Edit item</template>
                            <template slot="submit-button-text">Save</template>
                    </add-item>
                </md-list-item>
                <md-divider></md-divider>
            </span>
        </md-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddItem from '../components/AddItem.vue';

export default {
    name: 'wishlist',
    components: {
        AddItem
    },
    data: function() {
        return {
            showAddForm: false,
            showEditForm: []
        }
    },
    computed: {
        ...mapGetters([
            'wishlistForCurrentUser'
        ])
    },
    methods: {
        priceToString: priceObj => {
            return (priceObj.high === priceObj.low
                ? currencyString(priceObj.high)
                : `${currencyString(priceObj.low)}-${currencyString(priceObj.high)}`);
        }
    }
};


function currencyString(number) {
    return `$${number.toLocaleString()}`;
}
</script>

<style>
    /* .wishlist .md-list-item-content {
        padding-left: 0;
    } */
</style>
