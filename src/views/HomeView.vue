<script setup>
import { reactive } from "vue";
import Dropdown from "../components/Dropdown.vue";
import RecieveModal from "../components/modals/RecieveModal.vue";
import TransferModal from "../components/modals/TransferModal.vue";
import Transaction from "../components/Transaction.vue";

const state = reactive({
    isDropDownOpen: false,
    showTrasferModal: false,
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
    <div id="homepage">
        <div class="topBG">
            <div class="container">
                <h2 class="page-title">Home</h2>
                <div class="wallet-card">
                    <div class="wallet-am">
                        <div class="wallet-gif">
                            <img src="../assets/wallet.gif" alt="" />
                        </div>
                        <h3>₦150,000,000,000.08</h3>
                        <h6>Total Bal in Naira Wallet</h6>
                    </div>
                    <div class="wallet-bm">
                        <ul>
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#transferModal"
                            >
                                <i class="fa fa-paper-plane"></i>&nbsp; Transfer
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#receiveModal"
                            >
                                <i class="fa fa-hand-holding-heart"></i>&nbsp;
                                Receive
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#">
                                <i class="fa fa-qrcode"></i>&nbsp; Scan
                            </a>
                        </ul>
                    </div>

                    <div class="elx">
                        <div class="">
                            <a
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

                <h4 class="inner-title">Recent Transactions</h4>
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
        <!-- Wrapper Ends -->
    </div>

    <TransferModal />
    <RecieveModal />
</template>

<style scoped></style>
