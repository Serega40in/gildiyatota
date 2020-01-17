<template>
    <v-container>
        <v-navigation-drawer
                v-model="drawerRight"
                app
                clipped
                right
        >
            <v-list dense>
                <v-list-item :to="'/signin'" v-if="!isUserAuthenticated">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Войти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Выйти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="'/profile'" v-if="isUserAuthenticated">
                    <v-list-item-action>
                        <v-icon>mdi-eye-settings-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Профиль</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="'/users'">
                    <v-list-item-action>
                        <v-icon>mdi-battlenet</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Сообщество</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="'/addarticle'">
                    <v-list-item-action>
                        <v-icon>mdi-pencil-outline</v-icon>
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

            <v-img
                    class="mx-2"
                    src="https://firebasestorage.googleapis.com/v0/b/gildiyatota.appspot.com/o/sunmoon.png?alt=media&token=7dcf6e50-1059-4b1b-9659-121a1cff67b7"
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
                <v-list-item v-for="(item, i) in leftMenuItems"  v-bind:key="i" :to="item.route">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list height="200"></v-list>
            <v-list>
                <v-card-text>
                    <v-btn
                            v-for="(item, i) in socIcons"
                            v-bind:key="i"
                            icon
                            class="mx-3"
                            @click="goLink(item.route)"
                    >
                        <v-icon size="24px">{{ item.icon }}</v-icon>
                    </v-btn>
                </v-card-text>
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
            socIcons: [
                {
                    icon: 'mdi-instagram',
                    route: 'https://www.instagram.com/yaroslav_sibirskiy/?hl=ru'
                },
                {
                    icon: 'mdi-telegram',
                    route: 'https://tele.gg/totfana'
                },
                {
                    icon: 'mdi-youtube',
                    route: 'https://www.youtube.com/channel/UCylkbZon4CkFU8G8GlmrJmQ'
                },
                {
                    icon: 'mdi-vk',
                    route: 'https://vk.com/soulreality'
                }
            ],
            leftMenuItems: [
                {
                    icon: 'mdi-newspaper-variant-multiple',
                    title: 'Новости',
                    route: '/news'
                },
                {
                    icon: 'mdi-brightness-4',
                    title: 'База Знаний',
                    route: '/articles',
                },
                {
                    icon: 'mdi-meditation',
                    title: 'Медитации',
                    route: '/meditations',
                },
                {
                    icon: 'mdi-nfc',
                    title: 'Мероприятия',
                    route: '/activity',
                },
                {
                    icon: 'mdi-library-video',
                    title: 'Видео',
                    route: '/video',
                },
                {
                    icon: 'mdi-information-variant',
                    title: 'О сайте',
                    route: '../article/PwUXKcxilHM4gAr3E1HZ',
                }
            ]
        }),
        methods: {
            signout() {
                this.$confirm('Вы действительно хотите выйти?').then(res => {
                    if (res)
                        this.$store.dispatch('SIGNOUT')
                        this.$router.go('/')
                })
            },
            goLink(route) {
                window.open(route,'_blank')
            }
        },
        computed: {
            isUserAuthenticated() {
                return this.$store.getters.isUserAuthenticated
            },
        }
    }
</script>
<style>
    .v-list-item__title {
        font-size: 1rem!important;
    }
</style>
