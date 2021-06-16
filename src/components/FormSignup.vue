<!--<template>
  <img src="./../../intro-component-with-signup-form-master/design/desktop-design.jpg" />
</template> -->

<template>
  <form class="form-signup drop-shadow" @submit.prevent="submit">
    <BaseInput v-model="user.name" type="text" placeholder="Name" />
    <BaseInput v-model="user.lastname" type="text" placeholder="Last Name" />
    <BaseInput v-model="email" type="text" placeholder="Email" />
    <BaseInput v-model="user.password" type="password" placeholder="Password" />

    <!--       <button type="submit" class="btn form-button inner-shadow">
        {{ msg }}
      </button> -->

    <BaseButton type="submit" class="form-button inner-shadow">{{
      msg
    }}</BaseButton>

    <div class="flex flex-wrap justify-center text-center mt-2">
      <!-- eslint-disable -->
      <p>By clicking the button, you are agreeing to our</p>
      &nbsp<a href="#">Terms and Services</a>
    </div>
  </form>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  data: function () {
    return {
      msg: "CLAIM YOUR FREE TRIAL",
      user: {},
      email: null,
    };
  },
  methods: {
    submit() {
      console.log(this.user.name, this.user.lastname);
    },
  },
};
</script>

