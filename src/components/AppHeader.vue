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
                shrink-on-scroll
                clipped-right
                color="white"
                light
        >

            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-toolbar-img ></v-toolbar-img>
            <v-img
                    class="mx-2"
                    src="https://firebasestorage.googleapis.com/v0/b/gildiyatota.appspot.com/o/phoen.png?alt=media&token=a76ed8a1-5689-4332-9b37-27112f572762"
                    style="max-height: 200px ;max-width: 100px"

            ></v-img>
            <v-toolbar-title>
                Гильдия Тота
            </v-toolbar-title>

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
