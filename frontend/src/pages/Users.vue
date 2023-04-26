<template>
    <div>
        <div v-if="isUserLoading">
            Loading...
        </div>
        <div v-else>
            <div v-if="!alertShow">
                <user-item @edit="editedUser"  v-for="user in users" :key="user.id" :user="user"/>
            </div>
            <my-alert :show="alertShow" @closeAlert="closeAlert"  :variant="variant" :message="message"></my-alert>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import UserItem from '@/components/UserItem.vue'

export default {
    components: {
        UserItem
    },
    data() {
        return {
            modalDialogShow: false,
            variant: false,
            message: false,
            alertShow: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'user/setPage',
            setSearchQuery: 'user/setSearchQuery',
            setSelectedSort: 'user/setSelectedSort'
        }),
        ...mapActions({
            loadMoreUsers: 'user/loadMoreUsers',
            fetchUsers: 'user/fetchUsers',
        }),
        createUser(user) {
            this.users.push(user)
            this.modalDialogShow = 0
        },
        removeUser(user) {
            this.users = this.users.filter(p => p.id !== user.id)
        },
        modalWindowShow() {
            this.modalDialogShow = 1
        },

        editedUser(e) {

            console.log(e);

            this.alertShow = true
            this.message = e
            this.variant = "success"
        },

        closeAlert() {
            this.alertShow = false;
            this.fetchUsers();
        }
    },
    mounted() {
        this.fetchUsers();
    },
    computed: {
        ...mapState({
            users: state => state.user.users,
            isUserLoading: state => state.user.isUserLoading,
            page: state => state.user.page,
            limit: state => state.user.limit,
            totalPages: state => state.user.totalPages,
            selectedSort: state => state.user.selectedSort,
            searchQuery: state => state.user.searchQuery,
            sortOptions: state => state.user.sortOptions
        }),
        ...mapGetters({
            sortedUsers: 'user/sortedUsers',
            sortedAndSearchedUsers: 'user/sortedAndSearchedUsers'
        }),

      
    },
    // watch: {
    //     // selectedSort(newValue) {
    //     //     this.users.sort((user1, user2) => {
    //     //         return user1[this.selectedSort]?.localeCompare(user2[this.selectedSort])
    //     //    })
    //     // },
    //     users() {
    //         console.log(this.users)
    //     }
    // }
}
</script>

<style scoped></style>