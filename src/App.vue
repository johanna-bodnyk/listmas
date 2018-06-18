<template>
    <md-app>
        <md-app-toolbar class="md-primary">
            <span class="md-title">Merry Listmas</span>
        </md-app-toolbar>
        <md-app-drawer md-permanent="clipped">
            <md-list>
                <md-list-item to="/">
                    <md-icon>home</md-icon>
                    <div class="md-list-item-text">Dashboard</div>
                </md-list-item>
                <md-list-item to="/wishlist">
                    <md-icon>favorite</md-icon>
                    <div class="md-list-item-text">My Wishlist</div>
                </md-list-item>
            </md-list>      
        </md-app-drawer>
        <md-app-content>
            <router-view/>
        </md-app-content>
    </md-app>
</template>

<style>
    .md-drawer {
        width: 250px;
    }
</style>
