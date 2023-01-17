// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        dirs: ['stores'],
    },
    ssr: false,
    modules: [
        // ...
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore',
                ],
            },
        ],
        [
            '@nuxtjs/i18n',
            {
                vueI18n: {
                    /* module options */
                    locales: [
                        {
                            code: 'en',
                            file: 'en.json'
                        },
                        {
                            code: 'ar',
                            file: 'ar.json'
                        }
                    ],
                    defaultLocale: 'en',
                    lazy: true,
                    langDir: 'i18n/'
                }
            }
        ]
    ],
    css: ["@/assets/scss/style.scss"],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
