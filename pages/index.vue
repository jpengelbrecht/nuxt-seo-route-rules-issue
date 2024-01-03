<template></template>
<script setup>
// useHead({
//   title: `My Amazing Site`,
//   meta: [
//     {
//       name: "description",
//       content: "This is my amazing site, let me tell you all about it.",
//     },
//   ],
// });

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>