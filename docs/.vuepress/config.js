module.exports = {
  title: 'VeeValidate',
  description: 'Template Based Validation Framework for Vue.js',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-100131478-1'
      }
    ]
  ],
  base: '/vee-validate/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#41b883' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { property: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/logaretm/vee-validate.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VeeValidate',
      description: 'Input validation for Vue.js'
    }
  },
  themeConfig: {
    repo: 'logaretm/vee-validate',
    docsRepo: 'logaretm/vee-validate',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        '',
        'getting-started',
        'basic-validation',
        'applying-rules',
        'displaying-errors',
        'validation-provider',
        'validation-observer',
        'interaction-and-ux',
        'styling',
        'a11y',
        'html5-validation',
        'advanced-validation',
        'localization',
        'testing'
      ],
      '/api/': ['', 'rules'],
      '/examples/': ['ui-libraries', 'i18n', 'multiple-forms', 'backend', 'nuxt']
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Config', link: '/configuration' },
          { text: 'API', link: '/api/' },
          { text: 'Examples', link: '/examples/' }
        ]
      }
    }
  }
};
