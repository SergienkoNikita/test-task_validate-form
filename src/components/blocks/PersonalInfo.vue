<template>
  <div class="personal-info">
    <h3 class="block-title">Информация о клиенте</h3>
    <div class="block-form">
      <div class="flex-item">
        <text-input
          type="text"
          id="person-surname"
          placeholder="Иванов"
          :content="{text: 'Фамилия', required: true}"
          :v="v.surname"
          :msg="v.surname.alpha ? `Фамилия дожна быть не меньше ${v.surname.$params.minLength.min} и не больше ${v.surname.$params.maxLength.max} букв`
          : 'Поле должно содержать только буквы'"
        />
        <text-input
            type="text"
            id="person-name"
            placeholder="Иван"
            :content="{text: 'Имя', required: true}"
            :v="v.name"
            :msg="v.name.alpha ? `Имя дожно быть не меньше ${v.name.$params.minLength.min} и не больше ${v.name.$params.maxLength.max} букв` : 'Поле должно содержать только буквы'"
        />
        <text-input
            type="text"
            id="last-name"
            placeholder="Иванов"
            :content="{text: 'Отчество', required: false}"
            :v="v.lastName"
            :msg="v.lastName.alpha ? `Отчество дожно быть не меньше ${v.surname.$params.minLength.min} и не больше ${v.surname.$params.maxLength.max} букв`
            : 'Поле должно содержать только буквы'"
        />
      </div>
      <div class="flex-item">
        <text-input
            type="date"
            id="dob"
            :content="{text: 'Дата рождения', required: true}"
            :v="v.dob"
            :msg="'Введите корректную дату'"
        />
        <phone-input
            type="text"
            id="phone"
            placeholder="+7 (000) 000 00 00"
            :content="{text: 'Номер телефона', required: true}"
            :v="v.phone"
        />
        <div class="radio-item">
          <p class="input-label">Пол</p>
          <div class="radio-item-flex">
            <div>
              <input class="radio-input" type="radio" id="female" value="Мужской" name="sex" v-model="v.sex.$model">
              <label class="radio-label" for="female">Мужской</label>
            </div>
            <div>
              <input class="radio-input" type="radio" id="male" value="Женский" name="sex" v-model="v.sex.$model">
              <label class="radio-label" for="male">Женский</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TextInput from "../inputs/TextInput";
import PhoneInput from "../inputs/PhoneInput";
export default {
  name: "PersonalInfo",
  props: {
    v: Object
  },
  components: {
    TextInput,
    PhoneInput
  }
}
</script>

<style lang="sass">
.personal-info
  box-shadow: rgb(17 17 26 / 10%) 0 4px 13px
.block-title
  cursor: default
  padding: 2% 5%
  font-weight: normal
  font-size: 24px
  line-height: 120%
  color: #1D212A
.block-form
  height: fit-content
  overflow: hidden
  margin-left: 15px
  display: flex
  flex-wrap: wrap
  padding: 0 5% 4%
  justify-content: space-between
  & > .flex-item
    width: 48%
    display: flex
    flex-direction: column
    justify-content: flex-start
.input-item
  margin-top: 15px
  display: flex
  flex-direction: column-reverse
  width: 90%
  position: relative
  margin-bottom: 10px
.input-field
  padding: 10px 15px
  border: none
  width: 100%
  margin: 5px 15px
  font-size: 1.2em
  border-radius: 23px
  color: rgba(0, 0, 0, 0.5)
  text-transform: capitalize
  box-shadow: 0 0 0 1px #cccccc
  &.invalid, &.invalid:focus
    box-shadow: 0 0 0 1px rgba(224, 15, 15, 0.68)
    background: rgba(224, 15, 15, 0.05)
  &.valid, &.valid:focus
    box-shadow: 0 0 0 1px rgba(89, 167, 83, 0.42)
    background: rgba(89, 167, 83, 0.06)
  &:focus
    outline: none
    box-shadow: 0 0 0 1px #03156f
  &::placeholder
    color: #cccccc
.input-label
  color: #03156f
  font-style: italic
  & > span
    color: rgba(224, 15, 15, 0.68)
    font-weight: 800
    font-size: 1.1em
.radio-item-flex
  display: flex
  margin-left: 15px
  & > div + div
    margin-left: 20px
.radio-item > .input-label
  margin: 10px
.radio-input
  position: absolute
  z-index: -1
  opacity: 0
  &:not(:disabled):not(:checked)+.radio-label:hover::before
    border-color: rgba(3, 21, 111, 0.22)
    background-color: rgba(3, 21, 111, 0.25)
  &:not(:disabled):active+label::before
    background-color: rgba(3, 21, 111, 0.25)
    border-color: rgba(3, 21, 111, 0.22)
  &:focus+label::before
    border-color: rgba(3, 21, 111, 0.49)
  &:checked+label::before
    border-color: #03156f
    background-color: #03156f
    background-image: url("../../img/Union.svg")
.radio-label
  display: inline-flex
  align-items: center
  user-select: none
  cursor: pointer
  color: rgba(0, 0, 0, 0.76)
  &::before
    content: ''
    display: inline-block
    width: 20px
    height: 20px
    flex-grow: 0
    flex-shrink: 0
    border: 1px solid #adb5bd
    margin-right: 5px
    border-radius: 25%
    background-repeat: no-repeat
    background-position: center center
@media screen and (max-width: 1024px)
  .input-label, .radio-label
    font-size: .9em
    margin-left: 0
  .input-field
    font-size: 1em
  .radio-item > .input-label
    margin-left: 0
@media screen and (max-width: 968px)
  .personal-info
    width: 100%
@media screen and (max-width: 520px)
  .block-form
    padding: 0 5% 7%
    & > .flex-item
      width: 100%
  .radio-item-flex
    justify-content: space-around
    margin-left: 0

</style>