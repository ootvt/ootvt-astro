import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ootvt-astro.pages.dev', // 替换为您的 Cloudflare Pages 域名
  
  // [关键修复] 配置 Tailwind 4 的 Vite 插件
  // 没有这个，Tailwind 的样式在刷新后无法正确构建
  vite: {
    plugins: [tailwind()],
  },

  // [关键修复] 启用已安装的集成
  integrations: [
    mdx(), 
    sitemap()
  ],
  
  markdown: {
    shikiConfig: {
      // 配置双主题
      // Astro 会自动生成 CSS 变量：--shiki-light 和 --shiki-dark
      themes: {
        light: 'vitesse-light',
        dark: 'dracula',
      },
      // 启用自动换行，防止代码太长出现横向滚动条
      wrap: true,
    },
  },
});