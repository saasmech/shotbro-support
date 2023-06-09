import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShotBro Support Docs",
  base: "/shotbro-support/",
  description: "Support documentation for the ShotBro admin site and client library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/embed-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Embed Examples', link: '/embed-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/saasmech/shotbro' }
    ]
  }
})
