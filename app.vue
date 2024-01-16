<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
// does not work
defineOgImage({
  component: 'Default',
  props: {
    url: "https://images.ctfassets.net/y1cdw1ablpvd/2G9eUljiJXW11zOTpqRSUk/0e41dc83190b8be5d6ea8ec58d83da90/blog_image.png",
    heigh: 1008,
    width: 1796,
  }
})


// doest not work either
// defineOgImage({
//   url: 'https://images.ctfassets.net/y1cdw1ablpvd/2G9eUljiJXW11zOTpqRSUk/0e41dc83190b8be5d6ea8ec58d83da90/blog_image.png'
// })
</script>