<template>
  <div>
    Hello World
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>{{ dynamic == 49 ? "default" : dynamic }} title</Title>
        <Meta
          name="description"
          :content="`My page's ${dynamic} description`"
        />
      </Head>
    </Html>

    <button class="blue" @click="dynamic = Math.random() * 100">
      Click me
    </button>
    <p>Plus func: {{ plus }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    dynamic: 49,
    styleString: "body { background-color: green; }",
  }),
};
</script>
