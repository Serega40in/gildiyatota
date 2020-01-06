<template>
    <v-container>
        <v-navigation-drawer
                v-model="drawerRight"
                app
                clipped
                right
        >
            <v-list dense>
                <v-list-item :to="'/signin'">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Вход</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="'/profile'">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Создать статью</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-right
                color="blue-grey"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Toolbar</v-toolbar-title>
            <v-spacer />
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click.stop="left = !left">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary
        />


        <v-navigation-drawer
                v-model="right"
                fixed
                right
                temporary
        />


    </v-container>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
        }),
    }
</script>
