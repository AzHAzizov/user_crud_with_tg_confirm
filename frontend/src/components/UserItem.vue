<template>
    <div class="user">
        <div class="user__content">
            <div> <strong> Айди: </strong> {{ user.id }}</div>
            <div><strong>Логин: </strong> {{ user.login }}</div>
            <div><strong>Почта: </strong> {{ user.email }}</div>
        </div>
        <div class="user__btns">
            <my-button @click="modalDialogShow=!modalDialogShow">
                Изменить
            </my-button>
        </div>
     
        <my-dialog v-model:show="modalDialogShow">
           <user-form @edit="editUser" :user="user" />
        </my-dialog>
    </div>
</template>

<script>

import UserForm from '@/components/UserForm.vue'
import axios from 'axios'
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'


export default {
    components: {
        UserForm
    },
    props: {
        user: {
            type: Object,
            required: true
        }
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
        editUser(user) {
            console.log(user)
            this.updateUser(user);
            this.modalDialogShow = false
        },

         async updateUser(user) {
            try {
                this.page += 1
                const responce = await axios.post(`/user/`, {
                    params: {...user }
                })

                if (responce.data.success) {

                    console.log("Message from server")
                    console.log(responce.data.success)

                      this.$emit('edit', responce.data.success)
                } else if (responce.data.error) {
                     console.log("It is error")
                }
            } catch (error) {
                alert("Error")
            }
        },
    }
}
</script>

<style scoped>

.user {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 10px;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.user__content{
    max-width: 80%;
}

.user__btns{
    display: flex;
    justify-content: space-between;
}

</style>