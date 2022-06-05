<template>
  <page-layout>
    <b-col>
      <div
        class="d-flex flex-column align-items-center text-center m-auto p-3 py-5"
      >
        <img
          class="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span class="font-weight-bold"><strong> Name </strong> : Aly</span>
        <span class="text-black"><strong> Gender </strong> : male</span>
        <span class="text-black"
          ><strong> Date of birth </strong> : 16/10/1986</span
        >
        <span> </span>
      </div>
    </b-col>
  </page-layout>
</template>

<script lang="ts">
import PageLayout from "@/views/layouts/PageLayout.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: { PageLayout },
})
export default class Home extends Vue {}
</script>
