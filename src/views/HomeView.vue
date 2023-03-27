<script setup>
import { reactive } from "vue";
import Dropdown from "../components/Dropdown.vue";

const state = reactive({ isDropDownOpen: false });

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

                <h4 class="inner-title">Recent Transactions</h4>
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
                                    <li>
                                        <h4 class="credit">₦150,000</h4>
                                    </li>
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
                                    <li>
                                        <h4 class="debit">₦-150,000</h4>
                                    </li>
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
                                    <li>
                                        <h4 class="credit">₦150,000</h4>
                                    </li>
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
                                    <li>
                                        <h4 class="debit">₦-150,000</h4>
                                    </li>
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
                                    <li>
                                        <h4 class="credit">₦150,000</h4>
                                    </li>
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
                                    <li>
                                        <h4 class="debit">₦-150,000</h4>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Wrapper Ends -->
    </div>

    <div
        class="modal fade"
        id="transferModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog bottom-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Transfer</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <label>
                            Reciever
                            <span
                                class="ast"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="important"
                                >*</span
                            >
                        </label>
                        <input
                            type="text"
                            class="form-control fm"
                            placeholder="@username or wallet ID of benefecial"
                            required=""
                        />
                    </div>
                    <div class="form-group mb-3 text-center">
                        <label> Enter Amount </label>
                        <input
                            type="text"
                            class="form-control amount"
                            data-type="currency"
                            placeholder="₦1,000,000.00"
                            required=""
                            pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        />
                    </div>
                    <div class="form-group mb-3 text-center">
                        <button type="button" class="cusbtn">Transfer</button>
                    </div>
                </div>
                <!--<<div class="modal-footer">
        button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Transfer changes</button>
      </div>-->
            </div>
        </div>
    </div>

    <div
        class="modal fade"
        id="receiveModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Receive</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <h4 class="text-center">Scan</h4>
                    </div>
                    <div class="form-group mb-3 text-center">
                        <img src="images/tutuqr.png" width="200" />
                    </div>
                </div>
                <!--<<div class="modal-footer">
        button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Transfer changes</button>
      </div>-->
            </div>
        </div>
    </div>
</template>

<style scoped></style>
