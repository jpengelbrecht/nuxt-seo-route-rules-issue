export default defineNuxtConfig({
  modules: [
    "@nuxtseo/module",
  ],
  site: {
    trailingSlash: true,
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en',
  },
  // linkChecker: {
  //   excludeLinks: [  "/help/10/**"],
  //   skipInspections: [
  //     'no-error-response',
  //     'absolute-site-urls',
  //     'trailing-slash',
  //   ],
  //   enabled:false,
  //   // failOnError: true,
  // },
  // Need to do this to enable HMR during dev with tailwind
 
  
  routeRules: {
    "/maintenance/": { index: false },
    "/maintenance": { index: false },

  },
  typescript: {
    // typeCheck: true,
  },
  sourcemap: {
    client: true,
    server: true,
  },
  devServer: {
    port: 8080,
  },
  devtools: { enabled: true },


});
