import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        ViteImageOptimizer(),
    ],
    resolve: {
        alias: {
            '@img': '/src/img',
        }
    }
})