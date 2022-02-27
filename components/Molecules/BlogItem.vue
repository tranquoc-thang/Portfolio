<template>
  <div class="blog-item">
    <div
      class="mx-4 rounded-[4px] bg-[#fff] pl-[19px] pr-[13px] pt-[12px] pb-[22px] xxl:ml-2"
    >
      <h2
        class="font-bold text-[22px] leading-[30px] text-dark mb-[12px] xxl:text-[26px]"
      >
        {{ heading }}
      </h2>
      <div class="mb-[19px] text-[18px] font-normal text-dark">
        <span class="pr-[24px] border-r-[1px] border-dark mr-[24px]">
          {{ date }}
        </span>
        <span class="">
          {{ tag }}
        </span>
      </div>
      <p class="font-normal text-[16px] leading-[23.5px]">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    heading: {
      type: String,
      default: "Heading",
    },
    date: {
      type: String,
      default: "Date",
    },
    tag: {
      type: String,
      default: "Tag",
    },
    desc: {
      type: String,
      default: "Desc",
    },
  },
};
</script>
