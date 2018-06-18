import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUserId: 1,
        users: [
            {
                userId: 1,
                wishlist: [
                    {
                        listItemId: 1,
                        name: 'Pony',
                        description: 'Preferably dappled, thanks :)',
                        link: 'https://www.equinenow.com/horse-ad-1206179',
                        price: {
                            low: 4000,
                            high: 20000
                        }
                    },
                    {
                        listItemId: 2,
                        name: 'Nintendo Switch',
                        description: '',
                        link: 'https://www.nintendo.com/switch/buy-now/',
                        price: {
                            low: 299.99,
                            high: 299.99
                        }
                    }
                ]
            }
        ]
    },
    mutations: {
        addItemToWishlist: (state, item) => {
            let currentUser = state.users.find(user => user.userId === state.currentUserId);
            item.listItemId = create_UUID();
            currentUser.wishlist.push(item);
        }
    },
    actions: {

    },
    getters: {
        wishlistByUserId: state => userId =>
            state.users.find(user => user.userId === userId).wishlist,
        wishlistForCurrentUser: (state, getters) => 
            getters.wishlistByUserId(state.currentUserId)
    }
});

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}