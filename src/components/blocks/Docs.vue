<template>
  <div class="personal-info" >
    <h3 class="block-title" >Документы</h3>
    <div class="block-form">
      <div class="select-item" @click="isActive =!isActive">
        <label for="doc-type" class="input-label">Выберите тип документа <span>*</span></label>
        <div class="select-style" :class="{active: isActive, invalid: !v.type.required && v.type.$dirty}">
          <select name="doc-type" id="doc-type" class="select-section" v-model.lazy="v.type.$model">
            <option selected disabled hidden style='display: none' value>Выберите тип документа</option>
            <option value="Паспорт">Паспорт</option>
            <option value="Водительское удостоверение">Водительское удостоверение</option>
            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
          </select>
        </div>
        <p v-if="!v.type.required && v.type.$dirty" class="error-msg">Нужно выбрать значение</p>
      </div>
      <div :class="{['block-form-inactive']: true, hidden: !v.type.required}">
        <div class="flex-item">
          <text-input
              type="text"
              id="series"
              placeholder="Серия"
              :content="{text: 'Серия', required: false}"
              :v="v.series"
              :msg="v.series.alphaNum ? `Серия от ${v.series.$params.minLength.min} до ${v.series.$params.maxLength.max} символов`
              :'Поле должно содержать только буквы и цифры'"
          />
          <text-input
              type="text"
              id="issued-by"
              placeholder="Московским..."
              :content="{text: 'Кем выдан', required: false}"
              :v="v.issuedBy"
              :msg="v.issuedBy.alphaNum ? `От ${v.issuedBy.$params.minLength.min} до ${v.issuedBy.$params.maxLength.max} символов`
              :'Поле должно содержать только буквы и цифры'"
          />
        </div>
        <div class="flex-item">
          <text-input
              type="text"
              id="number"
              placeholder="Номер"
              :content="{text: 'Номер', required: false}"
              :v="v.number"
              :msg="v.number.numeric ? `От ${v.number.$params.minLength.min} до ${v.number.$params.maxLength.max} символов`
              :'Поле должно содержать только цифры'"
          />
          <text-input
              type="date"
              id="dateOfIssue"
              :content="{text: 'Дата выдачи', required: true}"
              :v="v.dateOfIssue"
              :msg="'Введите корректную дату'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../inputs/TextInput";
export default {
  name: "Docs",
  components: {TextInput},
  props: {v: Object},
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="sass">
.select-item
  width: 100%
  margin-top: 20px
  position: relative
.select-style
  width: 100%
  text-align: center
  position: relative
  border: 1px solid #03156f
  padding: 0 10px
  border-radius: 23px
  margin-top: 10px
  &.invalid
    border: 1px solid rgba(224, 15, 15, 0.68)
  &:hover
    box-shadow: 0 0 3px gray
  &:after
    content: ''
    height: 20px
    width: 20px
    background-image: url("../../img/arrow-circle.svg")
    background-size: cover
    position: absolute
    top: 25%
    right: 10px
    transform: rotate(180deg)
    transition: transform .2s linear
  &.active:after
    transform: rotate(0)
.select-section
  width: 100%
  padding: 10px
  background: transparent
  border: none
  appearance: none
  -webkit-appearance: none
  -moz-appearance: none
  font-size: 1.2em
  border-radius: 23px
  color: rgba(0, 0, 0, 0.5)
  &:focus
    outline: none

.select-section::-ms-expand
  display: none
.block-form-inactive
  display: flex
  width: 100%
  flex-wrap: wrap
  justify-content: space-between
  & .input-item
    margin: 20px 0
  & > .flex-item
    width: 45%
  &.hidden
    position: relative
    &:after
      content: ''
      position: absolute
      top: 15px
      left: 0
      z-index: 90
      height: 100%
      width: 100%
      background: #fff
      opacity: .7
@media screen and ( max-width: 520px)
  .block-form-inactive > .flex-item
    width: 100%
</style>