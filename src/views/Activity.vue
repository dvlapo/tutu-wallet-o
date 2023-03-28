<script setup lang="ts">
import { reactive } from "vue";
import Dropdown from "../components/Dropdown.vue";
import Nav from "../components/Nav.vue";

const state = reactive({
    isDropDownOpen: false,
    transactions: [
        {
            id: 1,
            title: "money for concert..",
            transactionType: "Transfer",
            date: "2 days ago",
            amount: "₦150,000",
        },
        {
            id: 2,
            title: "Money for food in...",
            transactionType: "Recieve",
            date: "2 days ago",
            amount: "₦-150,000",
        },
        {
            id: 3,
            title: "money for concert..",
            transactionType: "Transfer",
            date: "2 days ago",
            amount: "₦150,000",
        },
        {
            id: 4,
            title: "Money for food in...",
            transactionType: "Recieve",
            date: "2 days ago",
            amount: "₦-150,000",
        },
    ],
});

function toggleDropDown() {
    state.isDropDownOpen = !state.isDropDownOpen;
}
</script>

<template>
    <div id="activity">
        <div class="topBG">
            <div class="container">
                <h2 class="page-title">Activity</h2>
                <div class="wallet-card">
                    <div class="wallet-am text-start">
                        <h3>4000</h3>
                        <h6>Total Transactions</h6>

                        <h3 class="gtxt">2500</h3>
                        <h6>Total Credit</h6>

                        <h3 class="rtxt">1500</h3>
                        <h6>Total Debit</h6>
                    </div>

                    <div class="elx">
                        <div class="dropdown">
                            <a
                                class=""
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                @click="toggleDropDown"
                            >
                                <i class="fa fa-ellipsis-v"></i>
                            </a>

                            <Dropdown v-show="state.isDropDownOpen" />
                        </div>
                    </div>
                </div>

                <h4 class="inner-title">All Transactions</h4>
                <div class="page-content">
                    <div class="transactions">
                        <div class="clearfix">
                            <ul
                                class="trans clearfix"
                                v-for="transaction in state.transactions"
                            >
                                <Transaction :transaction="transaction" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
    <!-- Wrapper Ends -->
</template>

<style></style>
