<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
</script>
<template>
  <NuxtLayout>
    <div class="flex my-6 px-64">
      <!-- me image  -->
      <!--  -->
      <div class="radical-bg justify-center items-center flex">
        <img src="@/assets/images/Me.svg" alt="loading" width="100">
      </div>
      <div class="flex-col">
        <div class="flex arrow">
          <div class="w-1/2"></div>
          <p class=" text-white">Hello! I Am <span class=" text-blue-200">Basilica Benjamin</span></p>
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>
<style scoped>
.radical-bg {
  background: radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%);
  width: 200px;
  height: 200px;
}

.arrow {
  background-image: url("@/assets/images/Arrow.svg");
  background-repeat: no-repeat;
}
</style>
