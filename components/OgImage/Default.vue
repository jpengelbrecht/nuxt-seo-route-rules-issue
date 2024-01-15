<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
});

// const props = defineProps({
//   url: {
//     type: String,
//     default: "",
//   },
// });
withDefaults(
  defineProps<{
    url?: string;
    width?: number;
    height?: number;
  }>(),
  {
    url: "",
    width: 0,
    height: 0
  },
);
</script>

<template>
  <div class=" flex flex-col justify-center bg-[#212121]">
    <img  :src="url" :height="height" :width="width" />
    <!-- <img class="w-[900px] pl-[100px]" :src="url" /> -->
  </div>
</template>
