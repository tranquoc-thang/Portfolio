<template>
  <div>
    <!-- w-940 -->
    <header
      id="header"
      class="header h-[50px] show xxl:w-[940px] xxl:ml-[100px]"
    >
      <img
        id="btn-menu"
        src="../assets/images/menu.png"
        alt=""
        class="w-[30px] h-[18px] text-[#21243D] mt-[20px] mb-[12px] ml-auto xxl:hidden"
        @click="toggleMenuBar"
      />
      <div
        id="menuBar"
        class="xxl:!right-[350px] xxl:relative text-[#000000] text-[20px] font-medium ml-auto leading-[50px] fixed flex flex-col top-0 bottom-0 justify-start w-[300px] bg-[#333] xxl:bg-[#0000] xxl:!block transition-all"
      >
        <img
          src="../assets/images/times.png"
          alt=""
          class="block max-w-[30px] ml-auto mr-[15px] mt-[15px] cursor-pointer hover:text-[#ccc] xxl:hidden"
          id="btnClose"
          @click="toggleMenuBar"
        />
        <NuxtLink
          to="/home"
          class="active:text-primary hover:text-secondary cursor-pointer ml-[33px]"
          >Home</NuxtLink
        >
        <NuxtLink
          @click="toggleMenuBar"
          to="/work"
          class="active:text-primary hover:text-secondary cursor-pointer ml-[33px]"
          >Works</NuxtLink
        >
        <NuxtLink
          @click="toggleMenuBar"
          to="/blog"
          class="active:text-primary hover:text-secondary cursor-pointer ml-[33px]"
          >Blog</NuxtLink
        >
        <!-- <NuxtLink
          @click="toggleMenuBar"
          to="/contact"
          class="active:text-primary hover:text-secondary cursor-pointer ml-[33px]"
          >Contact</NuxtLink
        > -->
        <NuxtLink
          @click="toggleMenuBar"
          to="/login"
          class="active:text-primary hover:text-secondary cursor-pointer ml-[33px]"
          >Login</NuxtLink
        >
      </div>
    </header>
    <slot />
    <footer class="footer pb-[54px] text-center">
      <div class="mt-[50px] mb-[26px] mx-auto">
        <img
          class="inline-block w-[35px] h-[35px] text-dark mr-[35px]"
          src="../../assets/images/fb.png"
          alt=""
        />
        <img
          class="inline-block w-[35px] h-[35px] text-dark mr-[35px]"
          src="../../assets/images/insta.png"
          alt=""
        />
        <img
          class="inline-block w-[35px] h-[35px] text-dark mr-[35px]"
          src="../../assets/images/Group.png"
          alt=""
        />
        <img
          class="inline-block w-[35px] h-[35px] text-dark"
          src="../../assets/images/Linkedin.png"
          alt=""
        />
      </div>
      <p class="font-normal text-[14px] text-center">
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let menuBar;
    if (process.client) {
      menuBar = document.getElementById("menuBar")! as HTMLElement;
    }
    let isShow = true;
    function toggleMenuBar() {
      menuBar.classList.toggle("show", isShow);
      isShow = !isShow;
    }
    return { toggleMenuBar };
  },
});
</script>

<style>
#menuBar.show {
  right: 0;
  transition: all linear 0.3s;
  display: flex;
}
#menuBar {
  transition: all linear 0.3s;
  right: -100%;
}
</style>
