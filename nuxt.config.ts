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
  linkChecker: {
    excludeLinks: [  "/help/10/**"],
    skipInspections: [
      'no-error-response',
      'absolute-site-urls',
      'trailing-slash',
    ],
    enabled:false,
    // failOnError: true,
  },
  // Need to do this to enable HMR during dev with tailwind
 
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: ["/app/"],
  },
  
  routeRules: {
    "/continue": { index: false },
    "/maintenance": { index: false },
    // Don't add any /secret/** URLs to the sitemap.xml
    // "/app/**": { index: false },
    // "/account/**": { index: false },
    // "/sign-up/": { index: false },
    // "/cmp/**": { index: false },
    // "/help/10/**": { index: false },
    // // "/s/": { index: false },
    // "/404/": { index: false },
    // // "/go/**": { index: false },
    // "/test/": { index: false },
    // "/error/": { index: false },
    // "/login/": { index: false },
    // "/features/**": { index: false },
    // "/kb/**": { index: false },
    // "/contentful-preview/": { index: false },
    // "/try-again/": { index: false },
    // "/integration/**": { index: false },
    // "/continue": { index: false },
    // "/maintenance": { index: false },
    // // "/co/**": { index: false },
    // "/plp/**": { index: false },
    // "/integration/supported": { index: true },
    // "/help/audience/*/docs": { index: false },
    // "/help": { index: false },
    // "/thank-you-demo/": { index: false },
    // "/help/audience/": { index: false },
    // "/legal/subprocessors/?subprocessor=processor/": { index: false },
    // "/legal/subprocessors/?subprocessor=controller/": { index: false },
    // modify the sitemap.xml entry for specific URLs
    // '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } }
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
