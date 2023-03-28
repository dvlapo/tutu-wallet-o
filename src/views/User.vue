<script setup lang="ts">
import Nav from "../components/Nav.vue";
</script>

<template>
    <div id="user">
        <div class="container">
            <h2 class="page-title text-dark pt-30">User</h2>
            <div class="page-content">
                <div class="User">
                    <div class="user-p">
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept=".png, .jpg, .jpeg"
                                />
                                <label for="imageUpload"
                                    ><i class="fas fa-pencil-alt"></i>
                                </label>
                            </div>
                            <div class="avatar-preview">
                                <div
                                    id="imagePreview"
                                    style="
                                        background-image: url('../assets/users.png');
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div class="user-setting">
                        <div class="clearfix">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="far fa-user"></i> &nbsp;&nbsp;
                                        User settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-wallet"></i>&nbsp;&nbsp;
                                        Wallet settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-power-off"></i
                                        >&nbsp;&nbsp; LogOut
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
</template>
