import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/rafahgm.github.io/',
    plugins: [
        tailwindcss()
    ]
})