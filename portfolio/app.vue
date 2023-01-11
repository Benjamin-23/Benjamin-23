<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
</script>
<template>
  <NuxtLayout>
    <div class="flex mt-6 flex-col  items-center justify-start  gap-4">
      <!-- me image  -->
      <!--  -->
      <div class="flex justify-center">
        <div class="radical-bg justify-center items-center flex">
          <img src="@/assets/images/profile.svg" alt="loading">
        </div>
        <div class="flex-col relative gap-8 flex ml-[-20px] text-white mt-4">
          <div class="flex arrow  w-full gap-6 justify-evenly">
            <p class="  w-full text-m">Hello! I Am <span class=" text-blue-200">Basilica Benjamin</span></p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-[Preahvihear, poppins] text-sm underline">A Designer who</p>
            <h1 class="font-bold text-[2em]">Judges a book <br> by its <span
                class="text-blue-200 cover p-1">cover</span>...</h1>
            <span class="text-xs">Because if the cover does not impress you what else can?</span>
          </div>
        </div>
      </div>
      <!-- Describition  -->

      <div class="text-white flex flex-col gap-6">
        <div class="">
          <p class="text-2xl text-white font-bold">I'm a Software Engineer.| </p>
          <p class="text-white">Currently, I'm a Software Engineer at</p>
        </div>

        <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          <br> I make meaningful and delightful digital products that create an equilibrium
          <br> between user needs and business goals.
        </p>
      </div>

    </div>
  </NuxtLayout>
</template>
<style scoped>
.radical-bg {
  background: radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%);
  width: 250px;

}

/* .arrow {
  background-image: url("@/assets/images/Arrow.svg");
  background-repeat: no-repeat;
} */
.cover {
  border: 1px solid #FFFFFF;
  transform: rotate(-4.74deg);
  box-sizing: border-box;
  border-radius: 50%;
}
</style>
