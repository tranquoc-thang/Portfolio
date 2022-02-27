<template>
  <div>
    <div
      class="min-w-[100%] mb-[17px] rounded-[4px] bg-[#fff] pl-[19px] pr-[13px] pt-[12px] pb-[22px] xxl:flex"
    >
      <img
        :src="image"
        alt=""
        class="w-[100%] object-cover mb-[17px] xxl:max-w-[246px] xxl:max-h-[165px] xxl:mr-[18px]"
      />
      <div class="feature-content">
        <h2 class="font-bold text-[22px] leading-[30px] text-dark mb-[16px]">
          {{ heading }}
        </h2>
        <div class="mb-[24px] text-[16px] font-normal text-dark">
          <span
            class="mr-[22px] bg-[#142850] text-[#fff] px-[12px] py-[5px] rounded-[16px] font-black text-[16px]"
            >{{ date }}</span
          >
          <span class="text-light font-normal">{{ tag }}</span>
        </div>
        <p
          class="font-normal text-[16px] leading-[23.5px] pb-[17px] border-b border-[#e0e0e0]"
        >
          {{ desc }}
        </p>
        <slot name="link"></slot>
      </div>
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
    image: {
      type: String,
      default: "Image",
    },
  },
};
</script>
