<script setup lang="ts"></script>

<template>
    <ul class="drop-down" aria-labelledby="dropdownMenuLink">
        <li>
            <a class="dropdown-item" href="#">
                <h5>$30,000 <br /><small> Dallar Wallet </small></h5>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#">
                <h5>C30,000 <br /><small> Coins Wallet </small></h5>
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#">
                <h5>pts30,000 <br /><small>Points Wallet </small></h5>
            </a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    transform: translate(-130px, 25px);
    list-style: none;
    padding: 1rem;
    width: 150px;
    text-align: left;
    z-index: 999;
    background-color: white;
    color: #333;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
