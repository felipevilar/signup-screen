<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      desktop:flex-row
      desktop:w-4/5
    "
  >
    <div class="flex justify-center mt-20">
      <LoginText />
    </div>
    <div class="w-11/12 my-12">
      <div class="flex flex-col">
        <BaseButton type="button" class="tryit drop-shadow">
          <p class="text-sm w-7/12 desktop:w-full my-3">
            <strong class="font-bold">Try it free 7 days</strong> then $20/mo.
            thereafter
          </p>
        </BaseButton>
        <FormSignup />
      </div>
    </div>
  </div>
</template>

<script setup>
import FormSignup from "./components/FormSignup.vue";
import LoginText from "./components/LoginText.vue";
import BaseButton from "./components/BaseButton.vue";


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>
