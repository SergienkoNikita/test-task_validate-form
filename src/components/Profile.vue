<template>
<section class="profile">
  <img src="../img/profile-img.jpg" alt="avatar" class="profile-avatar">
  <div class="profile-information">
    <div class="profile-information-block">
      <h3 class="profile-title">Личная информация:</h3>
      <ul class="profile-list">
        <li class="profile-li">Фамилия: <span>{{ userInfo.personalInfo.surname }}</span></li>
        <li class="profile-li">Имя: <span>{{ userInfo.personalInfo.name }}</span></li>
        <li v-if="userInfo.personalInfo.lastName" class="profile-li">Отчество: <span>{{ userInfo.personalInfo.lastName }}</span></li>
        <li class="profile-li">Дата рождения: <span>{{ ruDob }}</span></li>
        <li class="profile-li">Телефон: <span>{{ userInfo.personalInfo.phone }}</span></li>
        <li v-if="userInfo.personalInfo.sex" class="profile-li">Пол: <span>{{ userInfo.personalInfo.sex }}</span></li>
      </ul>
    </div>
    <div  class="profile-information-block">
      <h3 class="profile-title">Контактная информация:</h3>
      <ul class="profile-list">
        <li v-if="userInfo.contactInfo.country" class="profile-li">Страна: <span>{{ userInfo.contactInfo.country }}</span></li>
        <li v-if="userInfo.contactInfo.district" class="profile-li">Область: <span>{{ userInfo.contactInfo.district }}</span></li>
        <li class="profile-li">Город: <span>{{ userInfo.contactInfo.city }}</span></li>
        <li v-if="userInfo.contactInfo.street" class="profile-li">Улица: <span>{{ userInfo.contactInfo.street }}</span></li>
        <li v-if="userInfo.contactInfo.house" class="profile-li">Дом: <span>{{ userInfo.contactInfo.house }}</span></li>
        <li v-if="userInfo.contactInfo.index" class="profile-li">Индекс: <span>{{ userInfo.contactInfo.index }}</span></li>
      </ul>
    </div>
    <div  class="profile-information-block">
      <h3 class="profile-title">Документы:</h3>
      <ul class="profile-list">
        <li class="profile-li">Тип: <span>{{ userInfo.documents.type }}</span></li>
        <li v-if="userInfo.documents.series" class="profile-li">Серия: <span>{{ userInfo.documents.series }}</span></li>
        <li v-if="userInfo.documents.number" class="profile-li">Номер: <span>{{ userInfo.documents.number }}</span></li>
        <li v-if="userInfo.documents.issuedBy" class="profile-li">Кем выдам: <span>{{ userInfo.documents.issuedBy }}</span></li>
        <li class="profile-li">Дата выдачи: <span>{{ rudDateOfIssue }}</span></li>
      </ul>
    </div>
    <div  class="profile-information-block">
      <h3 class="profile-title">Дополнительная информация:</h3>
      <ul class="profile-list">
        <li class="profile-li">Группа клиентов: <span>{{ ClientGroup }}</span></li>
        <li v-if="userInfo.additional.doctor" class="profile-li">Лечащий врач: <span> {{ userInfo.additional.doctor }} </span></li>
        <li v-if="userInfo.additional.notifications" class="profile-li">Отправлять СМС: <span>Да</span></li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Profile",
  props: {
    userInfo: Object
  },
  computed: {
    ruDob: function () {
      if (this.userInfo.personalInfo.dob){
        const date = new Date(this.userInfo.personalInfo.dob);
        return date.toLocaleString('ru', {  day: 'numeric', month: 'numeric', year: 'numeric'});
      } else return ''
    },
    rudDateOfIssue: function () {
      if (this.userInfo.documents.dateOfIssue){
        const date = new Date(this.userInfo.documents.dateOfIssue);
        return date.toLocaleString('ru', {  day: 'numeric', month: 'numeric', year: 'numeric'});
      } else return ''
    },
    ClientGroup: function () {
      if (this.userInfo.additional.clientGroup) {
        return this.userInfo.additional.clientGroup.join(', ')
      } else return ''
    }
  }
}
</script>

<style lang="sass">
@font-face
  font-family: Caveat
  font-weight: normal
  src: url("../fonts/Caveat-Regular.ttf")
.profile
  height: 100vh
  width: 45%
  background-color: #c5f1c16b
  -webkit-box-shadow: 1px 0 11px 8px rgba(0, 0, 0, 0.04) inset
  -moz-box-shadow: 1px 0 11px 8px rgba(0, 0, 0, 0.04) inset
  box-shadow: 1px 0 11px 8px rgba(0, 0, 0, 0.04) inset
  padding: 2vh 4vh
  text-align: center
  position: fixed
  right: 0
  top: 0
  &-avatar
    border-radius: 50%
    width: 20%
  &-information
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)
    grid-gap: 1.5vh
    &-block
      text-align: left
  &-list
    margin: 1.5vh 0 1.5vh 1vh
  &-li
    list-style-type: none
    font-family: OpenSans, sans-serif
    font-weight: 600
    font-size: .9em
    & + &
      margin-top: 10px
    & > span
      font-family: Caveat, sans-serif
      font-weight: normal
      font-size: 1.4em
      text-transform: capitalize
@media screen and (max-width: 1200px)
  .profile-title
    font-size: 1em
  .profile-li
    font-size: 0.8em
@media screen and (max-width: 968px)
  .profile
    height: fit-content
    min-height: 100vh
    background-color: #c5f1c1
    width: 100%
    z-index: 300
    position: fixed
    right: 100%
    top: 8vh
    transition: right .5s linear
    &.active
      right: 0

</style>