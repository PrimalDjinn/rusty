import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import ui from "@nuxt/ui/vite"
import router from "vue-router/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [router(), vue(), ui()],
})
