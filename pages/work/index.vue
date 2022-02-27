<template>
  <div>
    <h1
      class="font-bold text-[30px] text-dark mb-[10px] ml-[34px] xxl:mt-[100px] xxl:text-[44px] xxl:ml-[26px] xxl:mb-[55px]"
    >
      Work
    </h1>
    <ul class="pb-[50px] xxl:pb-[80px]" v-if="result">
      <WorkItem
        class="mb-[16px] border-b-[1px] xxl:pb-[30px] xxl:mb-[30px]"
        v-for="work in result"
        :key="work.id"
        :heading="work.heading"
        :tag="work.tag"
        :date="work.date"
        :desc="work.desc"
        :image="work.image"
      >
        <template v-slot:link>
          <div>
            <a :href="'work/' + work.id" class="text-secondary">Go to detail</a>
          </div>
        </template>
      </WorkItem>
    </ul>
    <Spin v-else class="w-[100%] text-center"></Spin>
  </div>
</template>

<script setup>
import WorkItem from "../../components/Molecules/WorkItem.vue";
import { Spin } from "ant-design-vue";
const { data } = await useFetch("/api/work");
const result = JSON.parse(data.value);
useMeta({
  title: "Portfolio | Work",
});
</script>
