import svgLoader from "vite-svg-loader";
import appConfig from "./app.config";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { PushContentfulFetch } from "./contentConfigFetch";
import NodeModulesPolyfills from "@esbuild-plugins/node-modules-polyfill";

export default defineNuxtConfig({
  modules: [
    "@nuxtseo/module",
  ],
  site: {
    trailingSlash: true,
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
 
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: ["/app/"],
  },
  
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
  // devtools: { enabled: true },


});
