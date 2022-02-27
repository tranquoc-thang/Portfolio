<template>
  <form class="login flex items-center justify-center flex-col h-[100vh]">
    <h1 class="font-normal text-[32px] text-center mb-[20px]">Login</h1>
    <p class="text-center text-[20px] mb-[25px]">
      Sign in and start managing your candidates!
    </p>
    <div class="min-w-fit flex flex-col items-center">
      <span class="mr-auto" style="color: red">{{ email.err }}</span>
      <span class="mr-auto" style="color: green">{{ email.suc }}</span>
      <input
        type="text"
        class="w-[250px] py-[10px] px-[12px] rounded-[10px] bg-[#224957] mb-[20px]"
        placeholder="Email"
        v-model="email.val"
      />
      <span class="mr-auto" style="color: red">{{ password.err }}</span>
      <span class="mr-auto" style="color: green">{{ password.suc }}</span>
      <input
        type="password"
        class="w-[250px] py-[10px] px-[12px] rounded-[10px] bg-[#224957] mb-[20px]"
        placeholder="Password"
        v-model="password.val"
      />
    </div>
    <div class="mb-[20px] text-[13px] flex justify-between w-[250px]">
      <div class="flex items-center">
        <input type="checkbox" />
        <span class="ml-1">Remember me</span>
      </div>
      <span class="block">Forgot password?</span>
    </div>
    <button
      type="submit"
      class="rounded-[10px] py-[12px] text-center w-[250px] text-[16px] font-normal bg-[#20DF7F]"
      @click.prevent="onLogin"
    >
      Login
    </button>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    useMeta({
      title: "Portfolio | Login",
    });

    definePageMeta({
      layout: false,
    });

    const email = reactive({
      val: "",
      err: "",
      suc: "",
    });
    const password = reactive({
      val: "",
      err: "",
      suc: "",
    });
    function required(...target) {
      for (let i = 0; i < target.length; i++) {
        if (target[i].val == "") {
          target[i].err = "This field is required";
          target[i].suc = "";
        } else {
          target[i].err = "";
          target[i].suc = "Great";
        }
      }
    }
    function lengthRequired(min, max, ...target) {
      for (let i = 0; i < target.length; i++) {
        if (target[i].val.length < min || target[i].val.length > max) {
          target[i].err = `The length between ${min} - ${max} character`;
          target[i].suc = "";
        } else {
          target[i].err = "";
          target[i].suc = "Great";
        }
      }
    }
    function emailRequired(...target) {
      for (let i = 0; i < target.length; i++) {
        if (
          target[0].val.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          target[i].err = "";
          target[i].suc = "Great";
        } else {
          target[i].err = "This field must be email";
          target[i].suc = "";
        }
      }
    }
    function onLogin() {
      required(email, password);
      lengthRequired(6, 18, email, password);
      emailRequired(email);
      if (email.err == "" && password.err == "") {
        if (email.val == "email@gmail.com" && password.val == "123456") {
          window.location.replace("http://localhost:3000");
        } else {
          alert("Account does not exists");
        }
      }
    }

    return { email, password, onLogin };
  },
};
</script>
