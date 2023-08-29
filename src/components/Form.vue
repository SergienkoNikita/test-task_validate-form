<template>
  <form action="#" class="form" @submit.prevent="$emit('submit')">
    <h1 class="form-title">Введите указанные данные для&nbsp;регистрации нового клиента:</h1>
    <p class="block-details">* Поля обязательные к заполнению</p>
    <PersonalInfo
      :v="v.personalInfo"
    />
    <ContactInfo
      :v="v.contactInfo"
    />
    <Docs
      :v="v.documents"
    />
    <Additional
        :v="v.additional"
    />
    <div class="form-btm">
      <button class="submit-btn" type="submit">Зарегистрировать</button>
    </div>
  </form>
</template>

<script>
import PersonalInfo from "./blocks/PersonalInfo";
import ContactInfo from "./blocks/ContactInfo";
import Docs from "./blocks/Docs";
import Additional from "./blocks/Additional";

export default {
  name: "Form",
  props: {
    v: Object
  },
  components: {
    PersonalInfo,
    ContactInfo,
    Docs,
    Additional
  }
}
</script>

<style lang="sass">
.form
  background-color: #fff
  border-radius: 24px
  position: relative
  padding-bottom: 150px
  width: 100%
  &-title
    text-align: left
    font-weight: bold
    padding: 2% 5% 0
  & > .block-details
    font-size: 1.2em
    color: rgba(224, 15, 15, 0.68)
    width: 100%
    padding: 0 7%
    font-style: italic
    margin-bottom: 5px
    font-weight: 300
    font-family: system-ui
.submit-btn
  padding: 20px 50px
  border-radius: 28px
  outline: none
  border: 1px solid #03156f
  background: #03156f
  display: block
  margin: 0 auto
  cursor: pointer
  color: #fff
  font-size: 1.1em
  &:disabled
    opacity: .6

.form-btm
  height: 150px
  background: rgb(0, 0, 0)
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(255, 255, 255) 42%)
  position: fixed
  bottom: 0
  width: 55%
  padding-top: 75px
  z-index: 100
.block-details
  font-size: .7em
  color: rgba(224, 15, 15, 0.68)
  width: 100%
@media screen and (max-width: 1024px)
  .form-title
    font-size: 1.5em
  .form > .block-details
    font-size: 1em
  .block-title
    font-size: 19px
@media screen and (max-width: 968px)
  .form
    display: flex
    flex-wrap: wrap
    & > .form-title
      width: 100%
    &-btm
      width: 100%
  .submit-btn
    padding: 15px 30px
    font-size: 1em
@media screen and ( max-width: 520px)
  .form-title
    font-size: 1.2em
  .form > .block-details
    font-size: .8em
</style>