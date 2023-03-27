<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
    <div class="wrapper">
        <RouterView />
        <Nav />
    </div>
</template>
