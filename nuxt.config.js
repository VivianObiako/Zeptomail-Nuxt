import colors from "vuetify/es5/util/colors";
const fs = require("fs");

export default {
  ssr: false,
  target: "static", // Ensure the target is set to 'static'
  buildDir: "dist",
  server: {
    port: 4000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Jacob Electric",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/main.css", "~assets/css/reset.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/toastification.js", ssr: false },
    { src: "~/plugins/google-analytics.client.js" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/google-analytics"
  ],

  // googleAnalytics: {
  //   id: 'UA-180780543-1'
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.NODE_ENV === "development"
        ? "https://jacob_back_end.test.com/api/v1/"
        : "https://api.jacobelectricgroup.com/api/v1/" // Used as fallback if no runtime config is provided
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      defaultAssets: {
        font: {
          family: "Open Sans"
        }
      },
      themes: {
        light: {
          mprimary: "#2B3897",
          primary: "#FB675E",
          accent: "#c4c9e8",
          secondary: "#2B3897",
          info: "#29a1bf",
          warning: "#e56d48",
          error: "#f63232",
          success: "#42d928",
          grey: "#575857",
          skyblue: "#F1F4FF",
          lightblue: "#3E8BFF"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  serverMiddleware: [
    { path: "/zeptomail/promotion", handler: "~/server/zeptomail/promotion.js" },
    { path: "/zeptomail/career", handler: "~/server/zeptomail/career.js" },
    { path: "/zeptomail/contactus", handler: "~/server/zeptomail/contactus.js" },
    { path: "/zeptomail/consultation", handler: "~/server/zeptomail/consultation.js" },
  ]
};
