<script lang="ts" setup>
import Nav from "../components/Nav.vue";
</script>

<template>
    <div id="user">
        <div class="container">
            <h2 class="page-title text-dark pt-30">Transaction details</h2>
            <div class="page-content">
                <div class="User">
                    <div class="user-p">
                        <div class="trans-det">
                            <h5>Receipt</h5>
                            <br />
                            <div class="table-responsive">
                                <table
                                    class="table table-bordered table-hover smtbs"
                                >
                                    <tbody>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">Ulid</p>
                                            </td>
                                            <td class="text-right">5</td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">Tnlid</p>
                                            </td>
                                            <td class="text-right">5</td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">Type</p>
                                            </td>
                                            <td class="text-right">Cashout</td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">Title</p>
                                            </td>
                                            <td class="text-right">Cashout</td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">
                                                    Narration
                                                </p>
                                            </td>
                                            <td class="text-right">Cashout</td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">Value</p>
                                            </td>
                                            <td class="text-right">
                                                <span class="naira">₦</span>
                                                89.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">
                                                <p class="text-black">
                                                    Currency
                                                </p>
                                            </td>
                                            <td class="text-right">Bank</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
</template>
