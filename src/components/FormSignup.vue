<!--<template>
  <img src="./../../intro-component-with-signup-form-master/design/desktop-design.jpg" />
</template> -->

<template>
  <form class="form-signup drop-shadow" @submit.prevent="submit">
    <BaseInput
      v-model="user.name"
      type="text"
      placeholder="Name"
      :class="{ 'form-input-error': !validName }"
      @blur="valide()"
    />
    <BaseInput
      v-model="user.lastname"
      type="text"
      placeholder="Last Name"
      :class="{ 'form-input-error': !validLastName }"
      @blur="valide()"
    />
    <BaseInput
      v-model="user.email"
      type="text"
      placeholder="Email"
      :class="{ 'form-input-error': !validEmail }"
    />
    <BaseInput
      v-model="user.password"
      type="password"
      placeholder="Password"
      :class="{ 'form-input-error': !validPassword }"
      @blur="valide()"
    />
    <BaseButton type="submit" class="form-button inner-shadow">{{
      msg
    }}</BaseButton>

    <div class="flex flex-wrap justify-center text-center mt-2">
      <!-- eslint-disable -->
      <p>By clicking the button, you are agreeing to our</p>
      &nbsp<a href="#">Terms and Services</a>
    </div>
  </form>
  <div>
    <p v-for="error of v$.$errors" :key="error.$uid">
      <strong>{{ error.$validator }}</strong>
      <small> on property</small>
      <strong>{{ error.$property }}</strong>
      <small> says:</small>
      <strong>{{ error.$message }}</strong>
    </p>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  components: { BaseInput, BaseButton },
  setup() {
    return { v$: useVuelidate() };
  },
  data: function () {
    return {
      validEmail: true,
      validName: true,
      validLastName: true,
      validPassword: true,
      submited: false,
      msg: "CLAIM YOUR FREE TRIAL",
      user: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      user: {
        name: { required }, // Matches this.contact.email
        lastName: { required, email }, // Matches this.contact.email
        email: { required, email }, // Matches this.contact.email
        password: { required, email }, // Matches this.contact.email
      },
    };
  },
  methods: {
    valide() {
      if (this.submited) {
        this.validName = !this.v$.user.name.$invalid;
        this.validLastName = !this.v$.user.lastName.$invalid;
        this.validPassword = !this.v$.user.password.$invalid;
        this.validEmail = !this.v$.user.email.$invalid;
      }
    },
    submit() {
      this.submited = true;
      this.valide();
    },
  },
};
</script>

