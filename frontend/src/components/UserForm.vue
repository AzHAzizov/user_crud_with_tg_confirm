<template>
    <div> Create new Post
        <form @submit.prevent>
            <div>
                <my-input v-model:modelValue.trim="localUser.login"  placeholder="Введите Логин">
                </my-input>
            </div>
            <div>
                <my-input v-model.trim="localUser.email" type="email" @blur="validateEmail" placeholder="Введите почту">
                </my-input>
            </div>
            <my-button @click="changeUser" type="submit"> Edit User</my-button>
        </form>

       
    </div>
</template>

<script>

import _ from 'lodash';


export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: JSON.parse(JSON.stringify(this.user)),
            modelValue: false,
           
        }
    },
    methods: {
        changeUser() {
            if (!this.validateEmail()) {
                return;
            }

            if (_.isEqual(this.localUser, this.user)) return;

            const curentName = this.localUser.login.trim();
            const actualName = this.user.login.trim();

            const curentMail = this.localUser.email.trim();
            const actualMail = this.user.email.trim();

            if (curentName == actualName && curentMail == actualMail) return;

            
            console.log(this.localUser);
            this.$emit('edit', this.localUser)
        },
        validateEmail() {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.localUser.email)) {
                return true;
            }
            return false;
        }

        
    },
}
</script>

<style lang="css" scoped></style>