import { defineNuxtConfig } from "nuxt3";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ["moment", "compute-scroll-into-view", "ant-design-vue"],
    },
  },
  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
