<!--
 * @Description: 字幕区
 * @author: owenTong
 * @since: 2023-05-29
 * subtitleMaterial.vue
-->
<template>
  <div class="container">{{ options }}</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'SubtitleMaterial' });
interface Props {
  options: GlobalMenuOptions.ExtendMenuOptions;
}
const props = defineProps<Props>();
const { options } = toRefs(props);
</script>

<style scoped></style>
