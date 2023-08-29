<template>
  <div class="input-item">
    <input
        v-bind="$attrs"
        :class="{invalid: v.$error,valid: v.$dirty && !v.$error && v.$model.length, ['input-field']: true}"
        v-model.lazy.trim="v.$model"
        maxlength="60"
    >
    <label
        :for="$attrs.id"
        class="input-label"
    >{{ content.text }}
      <span v-if="content.required">*</span>
    </label>
    <p v-if="!v.required && content.required && v.$dirty" class="error-msg">Поле должно быть заполнено</p>
    <p v-else-if="v.$error" class="error-msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props:{v: Object, content: Object, msg: String},
}
</script>

<style lang="sass">
  @keyframes ping
    30%
      transform: translateX(-8px)
    60%
      transform: translateX(8px)
  .error-msg
    animation: ping .4s linear
    color: rgba(224, 15, 15, 0.68)
    position: absolute
    bottom: -20px
    left: 15px
    font-size: 13px
    width: 120%
    z-index: 95
</style>