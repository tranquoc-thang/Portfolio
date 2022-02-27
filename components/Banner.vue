<template>
  <div
    class="banner flex items-center flex-col mt-[83px] mb-[59px] lg:flex-row-reverse xxl:justify-between"
  >
    <img
      src="../assets/images/banner.png"
      alt=""
      class="w-[175px] object-cover mb-[34px] block"
    />
    <div class="banner-wrap flex flex-col items-center xxl:block">
      <h1
        class="text-[32px] leading-[40px] text-dark text-center font-bold mb-[21px] xxl:w-[470px] xxl:text-[44px] xxl:text-left xxl:mb-[40px]"
      >
        Hi, I am John, Creative Technologist
      </h1>
      <p
        class="mb-[27px] leading-[23.5px] text-center text-[16px] font-normal text-dark xxl:text-left xxl:w-[497px] xxl:mb-[47px]"
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button
        class="px-[20px] pt-[9px] pb-[17px] w-[208px] h-[47px] font-medium text-[20px] bg-primary text-[#fff] cursor-pointer rounded-md"
      >
        Download Resume
      </button>
    </div>
  </div>
</template>

<script setup>
const count = useState("counter");
</script>
