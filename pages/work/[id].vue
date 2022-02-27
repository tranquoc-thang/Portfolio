<template>
  <div
    class="flex flex-col items-center text-center mt-[20px] mb-[100px] xxl:mt-[50px] xxl:mb-[150px]"
  >
    <!-- <h2>{{ result[$route.params.id - 1] }}</h2> -->
    <TypographyTitle class="my-[20px] xxl:my-[30px]">{{
      result[$route.params.id - 1].heading
    }}</TypographyTitle>
    <div class="mb-[10px] xxl:text-[20px] xxl:mb-[20px]">
      <Badge
        :count="result[$route.params.id - 1].date"
        :overflow-count="9999"
      ></Badge>
      <Divider
        type="vertical"
        style="border-left: 1px solid rgb(156, 129, 129)"
      ></Divider>
      <TypographyText type="secondary">{{
        result[$route.params.id - 1].tag
      }}</TypographyText>
    </div>
    <TypographyParagraph
      class="mb-[10px] xxl:w-[500px] xxl:mb-[20px]"
      style="max-width: 500px"
      >{{ result[$route.params.id - 1].desc }}</TypographyParagraph
    >
    <ImagePreviewGroup>
      <Image
        :src="result[$route.params.id - 1].image"
        :preview="false"
        fallback="https://aliyuncdn.antdv.com/logo.png"
        class="w-[250px] xxl:w-[600px]"
      ></Image>
    </ImagePreviewGroup>
  </div>
</template>

<script setup>
import {
  TypographyTitle,
  TypographyParagraph,
  TypographyText,
  ImagePreviewGroup,
  Image,
  Badge,
  Divider,
} from "ant-design-vue";
const { data } = await useFetch("/api/work");
const result = JSON.parse(data.value);
const route = useRoute();
useMeta({
  title: `Portfolio | Work ${route.params.id}`,
});
</script>
