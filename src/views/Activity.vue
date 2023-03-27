<script setup lang="ts">
import { reactive } from "vue";
import Dropdown from "../components/Dropdown.vue";

const state = reactive({ isDropDownOpen: false });

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
                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img">
                                            <i
                                                class="fa fa-angle-double-right"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>money for concert..</h5>
                                        <h6>
                                            Transfer &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="credit">₦150,000</h4></li>
                                </a>
                            </ul>

                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img2">
                                            <i
                                                class="fa fa-angle-double-left"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>Money for food in...</h5>
                                        <h6>
                                            Recieve &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="debit">₦-150,000</h4></li>
                                </a>
                            </ul>

                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img">
                                            <i
                                                class="fa fa-angle-double-right"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>money for concert..</h5>
                                        <h6>
                                            Transfer &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="credit">₦150,000</h4></li>
                                </a>
                            </ul>

                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img2">
                                            <i
                                                class="fa fa-angle-double-left"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>Money for food in...</h5>
                                        <h6>
                                            Recieve &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="debit">₦-150,000</h4></li>
                                </a>
                            </ul>

                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img">
                                            <i
                                                class="fa fa-angle-double-right"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>money for concert..</h5>
                                        <h6>
                                            Transfer &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="credit">₦150,000</h4></li>
                                </a>
                            </ul>

                            <ul class="trans clearfix">
                                <a href="transaction-details.html">
                                    <li>
                                        <span class="t-img2">
                                            <i
                                                class="fa fa-angle-double-left"
                                            ></i>
                                        </span>
                                    </li>
                                    <li>
                                        <h5>Money for food in...</h5>
                                        <h6>
                                            Recieve &nbsp; ~
                                            <small> 2 days ago </small>
                                        </h6>
                                    </li>
                                    <li><h4 class="debit">₦-150,000</h4></li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Wrapper Ends -->
</template>

<style></style>
