/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        fontFamily:{ 
          sans:[" Plus Jakarta Sans","sans-serif"],
          display:[]
        },
        colors:{ 
          blue:{
            100:"#1A0B2E",
            200:"#7127BA"
          }
        }
      },
    },
    plugins: [],
  }