<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            成都
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
                <a href="#">汉南区</a>
                <a href="#">孝感</a>
                <a href="#">新洲区</a>
            ]
        </div>
         <div class="m-user">
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
    </div>
</template>
