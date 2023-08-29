<template>
  <div class="input-item">
    <input
        v-bind="$attrs"
        :class="{invalid: v.$error && (v.$model.length > 1 || !v.required), valid: !v.$error && v.$dirty, ['input-field']: true}"
        v-model.lazy="v.$model"
        @focus="v.$model = v.$model.length > 1 ? v.$model : '7'"
        @blur="v.$model = v.$model.length > 1 ? v.$model : ''"
        v-phone
        maxlength="18"
    >
    <label
        :for="$attrs.id"
        class="input-label"
    >{{ content.text }}
      <span v-if="content.required">*</span>
    </label>
    <p v-if="!v.required && content.required && v.$dirty" class="error-msg">Поле должно быть заполнено</p>
    <p v-else-if="v.$error && v.$model.length > 1" class="error-msg">В номере телефона 11 цифр</p>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props:{v: Object, content: Object, msg: String},
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    setPhone(value) {
      if (value.length > 1) {
        this.phone = value;
        this.v.$touch();
      } else this.phone = ''
    }
  }
}
</script>

<style scoped lang="sass">
</style>