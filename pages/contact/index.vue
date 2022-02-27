<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const color = useColor();
const { data } = await useAsyncData("count", () => $fetch("/api/count"));

useMeta({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [
    {
      type: "module",
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
    },
    {
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
    },
  ],
  title: "Portfolio | Contact",
});

const plus = usePlus("We", "don't", "talk", "anymore");
console.log(plus);

const { data: mountain } = await useFetch("/api/stuff", {
  pick: ["title", "description"],
});
console.log("mountains", mountain.value);
</script>

<template>
  <div>
    <h1>
      This is contact
      <ion-icon name="heart"></ion-icon>
    </h1>
    <p>Current color: {{ color }}</p>

    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <div>Page visits: {{ data }}</div>
    <p>Current color: {{ color }}</p>
  </div>
</template>
