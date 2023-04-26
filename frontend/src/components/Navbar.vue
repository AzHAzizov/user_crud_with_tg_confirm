<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="cursor-point">
            <img src="@/assets/logo.png" alt="" class="navbar__logo">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    padding: 0 15px;
    align-items: center;
}


.navbar__btns {
    margin-left: auto;
    margin-right: 7px;
}

.navbar__btn {
    margin-right: 7px;
}

.navbar__btn:last-child {
    margin-right: 0px;
}


.cursor-point {
    cursor: pointer;
}


.navbar__logo {
    max-width: 25px;
    max-height: 25px;
}
</style>