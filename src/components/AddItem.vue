<template>
    <md-card>
        <md-card-header>
            <div class="md-title"><slot name="title"></slot></div>
        </md-card-header>
        <md-card-content>
            <form>
                <md-field>
                    <label>Item name</label>
                    <md-input v-model="name"></md-input>
                </md-field>
                <md-field>
                    <label>Link</label>
                    <md-input v-model="link" type="url"></md-input>
                </md-field>
                <md-field>
                    <label>Description</label>
                    <md-textarea v-model="description" md-autogrow></md-textarea>
                </md-field>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item">
                        <md-field>
                            <label>Price: Low End</label>
                            <md-input v-model="priceLow" type="number"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item">
                        <md-field>
                            <label>Price: High End</label>
                            <md-input v-model="priceHigh" type="number"></md-input>
                        </md-field>
                    </div>
                </div>
            </form>
        </md-card-content>

        <md-card-actions>
            <md-button @click="onClickCancel" class="md-raised">Cancel</md-button>
            <md-button @click="onClickSubmit" class="md-raised md-primary">
                <slot name="submit-button-text">Submit</slot>
            </md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    export default {
        name: 'add-item',
        data: function() {
            return {
                name: null,
                description: null,
                link: null,
                priceLow: null,
                priceHigh: null
            }
        },
        methods: {

            onClickCancel: function() {
                this.clearForm();
                this.$emit('hide');
            },
            onClickSubmit: function() {
                // TODO: Validate form
                let item = {
                    name: this.name,
                    description: this.description,
                    link: this.link,
                    price: {
                        low: this.priceLow,
                        high: this.priceHigh
                    }
                };
                this.$store.commit('addItemToWishlist', item);
                this.clearForm();
                this.$emit('hide');
            },
            clearForm: function() {
                this.name = null;
                this.description = null;
                this.link = null;
                this.priceLow = null;
                this.priceHigh = null;
            }
        }
    };
</script>
