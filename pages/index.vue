<template>
  <div class="">
    <Banner></Banner>
    <RecentPost></RecentPost>
    <FeatureWorks></FeatureWorks>
  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import RecentPost from "../components/RecentPost.vue";
import FeatureWorks from "../components/FeatureWorks.vue";
export default {
  components: {
    Banner,
    RecentPost,
    FeatureWorks,
  },
};
</script>
