<template>
<section class="additional" >
  <h3 class="block-title">Дополнительная информация</h3>
  <div class="block-form">
    <div class="flex-item">
      <div class="select-item">
        <label for="Clients-group" class="input-label">Группа клиентов<span>*</span></label>
        <div class="select-style -client-group" :class="{invalid: !v.clientGroup.required && v.clientGroup.$dirty}">
          <select name="doc-type" id="Clients-group" class="select-section" multiple v-model="v.clientGroup.$model">
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </div>
        <p v-if="!v.clientGroup.required && v.clientGroup.$dirty" class="error-msg">Нужно выбрать хотя бы одно значение</p>
      </div>
    </div>
    <div class="flex-item">
      <div class="select-item" @click="isActive = !isActive">
        <label for="doctor" class="input-label">Лечащий врач</label>
        <div class="select-style" :class="{active: isActive}">
          <select name="doc-type" id="doctor" class="select-section" v-model="v.doctor.$model">
            <option value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </div>
      </div>
    </div>
    <div class="radio-item">
      <div>
        <input class="radio-input" type="checkbox" id="notifications" value="true" name="notifications" v-model="v.notifications.$model" @click="log">
        <label class="radio-label" for="notifications">Отправлять СМС оповещения о важной информации</label>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Additional",
  props: {v: Object},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    log() {
      console.log(this.v.notifications.$model)
    }
  }
}
</script>

<style lang="sass">
select::-webkit-scrollbar
  width: 0
.select-style.active:after
  transform: rotate(0)
.-client-group
  width: 70%
  & > select
    height: 86px
    text-align: center
  &:after
    display: none
    height: 100px
.additional .radio-item
  margin-top: 40px
  width: 100%
  text-align: center
@media screen and ( max-width: 520px)
  .-client-group
    width: 100%

</style>