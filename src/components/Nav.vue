<script lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <nav>
        <RouterLink to="/" class="nav-item">
            <i class="fa fa-home"></i><span>Home</span>
        </RouterLink>

        <RouterLink to="/activity" class="nav-item">
            <i class="far fa-chart-bar"></i><span>Activity</span>
        </RouterLink>

        <RouterLink to="/user" class="nav-item">
            <i class="far fa-user"></i><span>User</span>
        </RouterLink>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 12px;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 480px;
    border-top: 1px solid #f0f2f5;
}

.nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3844d2;
    padding: 12px 16px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0);
}

.nav-item span {
    width: 0;
    overflow: hidden;
}
/*
.nav-item:focus{
  text-decoration: none;
  color: #e36b09;
  background-color: rgba(255, 255, 255, 0.2);
  transition: .2s;
}*/
.nav-item.active,
.nav-item.router-link-active,
.nav-item.router-link-exact-active {
    text-decoration: none;
    color: #e36b09;
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.2s;
}
.nav-item:hover {
    text-decoration: none;
}
</style>
