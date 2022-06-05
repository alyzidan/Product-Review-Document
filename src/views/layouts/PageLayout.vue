<template>
  <b-container>
    <b-row class="w-100">
      <b-col class="mt-5 mb-5">
        <slot />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class PageLayout extends Vue {}
</script>
