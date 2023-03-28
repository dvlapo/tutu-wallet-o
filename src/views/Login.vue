<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const state = reactive({
    userName: "cappers",
    password: "Javabeans007",
});

async function login() {
    const response = await fetch(
        "https://lab.aibox.systems/tutu/v1/engine/open/auth/login",
        {
            method: "POST",
            headers: {
                "X-Timestamp": Date.now().toString(),
                "X-Channel": "api",
                "X-Require": "01GSFY46690R5WYMJMQK8Q194D",
                "X-Api-key": "01GSFZT5PV5NNNWP3RWQ5XYJ53",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: state.userName,
                password: state.password,
            }),
        }
    );
    console.log(response, Date.now().toString());

    if (response.ok) {
        // Login successful
        // const { token } = await response.json();
        // localStorage.setItem("token", token);
        // // Redirect to dashboard or home page
        // this.$router.push("/");
    } else {
        // // Login failed
        // const error = await response.json();
        // console.error(error);
    }
}
</script>

<template>
    <div id="login">
        <div class="container">
            <div class="page-content text-white">
                <form class="loginPG" @submit.prevent="login">
                    <div class="logo text-center">
                        <img src="../assets/tutu-sm-white.svg" width="200" />
                    </div>
                    <br />
                    <h4 class="text-center">
                        <i class="fa fa-wallet"></i> wallet
                    </h4>
                    <br />
                    <div class="mb-3">
                        <label class="form-label"> Username</label>
                        <input
                            type="text"
                            class="cus-input"
                            placeholder=""
                            v-model="state.userName"
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input
                            type="password"
                            class="cus-input"
                            placeholder=""
                            v-model="state.password"
                        />
                    </div>
                    <div class="form-group mt-3 mb-3 text-end lbtm">
                        <a href="#"> Forgot Password? </a>
                    </div>
                    <div class="form-group mt-3 mb-3 text-center">
                        <button class="cusbtn2">
                            Login &nbsp;&nbsp; <i class="fa fa-arrow-right"></i>
                        </button>
                    </div>

                    <div class="form-group mt-3 mb-3 text-center lbtm">
                        Don't have an account?
                        <RouterLink to="/signup"> Create Account </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#login {
    background-color: #192184;
}
</style>
