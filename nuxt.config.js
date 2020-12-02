// import path from 'path'
// import fs from 'fs'

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,
    // server: {
    //     https: {
    //         key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    //     }
    // },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'oqy.kz-front',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/css/main.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/axios',
        '~/plugins/getCurrentUser',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        proxy: true,
        requestInterceptor: (config, { store }) => {
            config.headers.common['Content-Type'] = 'application/json';

            return config
        },
        responseInterceptor: (res, ctx) => {}
    },

    proxy: {
        '/api': { target: 'http://localhost:8000/', changeOrigin: true },
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}