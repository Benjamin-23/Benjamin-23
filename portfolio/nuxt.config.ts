// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private key which available on server side
        apiSecret:"",
        // keys with public are also exposed client- side

        public:{ 
            apiBase:'/api'
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },

})
