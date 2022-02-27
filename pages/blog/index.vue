<template>
  <div class="">
    <h1
      class="font-bold text-[30px] text-dark mb-[10px] ml-[34px] xxl:mt-[100px] xxl:text-[44px] xxl:ml-[26px] xxl:mb-[55px]"
    >
      Blog
    </h1>
    <ul class="pb-[50px] xxl:pb-[80px]" v-if="result">
      <BlogItem
        class="mb-[16px] border-b-[1px] xxl:pb-[30px] xxl:mb-[30px]"
        v-for="blog in result"
        :key="blog.id"
        :heading="blog.heading"
        :tag="blog.tag"
        :date="blog.date"
        :desc="blog.desc"
      ></BlogItem>
    </ul>
    <Spin v-else class="w-[100%] text-center"></Spin>
  </div>
</template>

<script setup>
import BlogItem from "../../components/Molecules/BlogItem.vue";
import { Spin } from "ant-design-vue";
const { data } = await useFetch("/api/blog");
const result = JSON.parse(data.value);
useMeta({
  title: "Portfolio | Blog",
});
// import BlogItem from "../../components/Molecules/BlogItem.vue";
// import { ref } from "vue";
// export default {
//   setup() {
//     interface BlogType {
//       id: number;
//       heading: string;
//       date: string;
//       tag: string;
//       desc: string;
//     }
//     // const blogData = ref<BlogType[]>([
//     //   {
//     //     id: 1,
//     //     heading: "Creating pixel perfect icons in Figma",
//     //     date: "12 Feb 2020",
//     //     tag: "Design, Pattern",
//     //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     //   },
//     //   {
//     //     id: 2,
//     //     heading: "Creating pixel perfect icons in Figma",
//     //     date: "12 Feb 2020",
//     //     tag: "Design, Pattern",
//     //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     //   },
//     //   {
//     //     id: 3,
//     //     heading: "Creating pixel perfect icons in Figma",
//     //     date: "12 Feb 2020",
//     //     tag: "Design, Pattern",
//     //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     //   },
//     // ]);

//     return { blogData };
//   },
//   components: {
//     BlogItem,
//   },
// };
//
</script>
