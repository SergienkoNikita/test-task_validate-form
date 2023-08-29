<template>
<div class="popup">
  <div v-if="loading" class="loading">
    <div id="circularG">
      <div id="circularG_1" class="circularG"></div>
      <div id="circularG_2" class="circularG"></div>
      <div id="circularG_3" class="circularG"></div>
      <div id="circularG_4" class="circularG"></div>
      <div id="circularG_5" class="circularG"></div>
      <div id="circularG_6" class="circularG"></div>
      <div id="circularG_7" class="circularG"></div>
      <div id="circularG_8" class="circularG"></div>
    </div>
  </div>
  <div v-else class="inform-massage">
    <div v-if="success" class="success">
      <img src="../img/happy-doctor.png" alt="" class="success-picture">
      <h1>Отлично! Новый клиент успешно создан!</h1>
    </div>
    <div v-else class="success">
      <img src="../img/sad-doctor.png" alt="" class="success-picture">
      <h1>Что-то пошло не так. Возможно ведутся работы на сервере.</h1>
    </div>
    <div class="close-btn" @click="$emit('close')">
      <img src="../img/close-menu.svg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PopUp",
  props: {loading: Boolean, success: Boolean}
}
</script>

<style lang="sass">
.popup
  position: absolute
  top: 0
  left: 0
  height: 100vh
  width: 100%
  background: rgba(255, 255, 255, 0.89)
  z-index: 888
.loading
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
.success
  margin: 10% auto
  width: 100%
  text-align: center
  &-picture
    height: 50vh
.close-btn
  top: 10%
  right: 25%
  height: 7vh
  position: absolute
  cursor: pointer
  & > img
    height: 100%


#circularG
  position: relative
  width: 45px
  height: 45px
  margin: auto

.circularG
  position: absolute
  background-color: rgb(3, 21, 111)
  width: 10px
  height: 10px
  border-radius: 7px
  -o-border-radius: 7px
  -ms-border-radius: 7px
  -webkit-border-radius: 7px
  -moz-border-radius: 7px
  animation-name: bounce_circularG
  -o-animation-name: bounce_circularG
  -ms-animation-name: bounce_circularG
  -webkit-animation-name: bounce_circularG
  -moz-animation-name: bounce_circularG
  animation-duration: 1.1s
  -o-animation-duration: 1.1s
  -ms-animation-duration: 1.1s
  -webkit-animation-duration: 1.1s
  -moz-animation-duration: 1.1s
  animation-iteration-count: infinite
  -o-animation-iteration-count: infinite
  -ms-animation-iteration-count: infinite
  -webkit-animation-iteration-count: infinite
  -moz-animation-iteration-count: infinite
  animation-direction: normal
  -o-animation-direction: normal
  -ms-animation-direction: normal
  -webkit-animation-direction: normal
  -moz-animation-direction: normal

#circularG_1
  left: 0
  top: 18px
  animation-delay: 0.41s
  -o-animation-delay: 0.41s
  -ms-animation-delay: 0.41s
  -webkit-animation-delay: 0.41s
  -moz-animation-delay: 0.41s

#circularG_2
  left: 4px
  top: 4px
  animation-delay: 0.55s
  -o-animation-delay: 0.55s
  -ms-animation-delay: 0.55s
  -webkit-animation-delay: 0.55s
  -moz-animation-delay: 0.55s

#circularG_3
  top: 0
  left: 18px
  animation-delay: 0.69s
  -o-animation-delay: 0.69s
  -ms-animation-delay: 0.69s
  -webkit-animation-delay: 0.69s
  -moz-animation-delay: 0.69s

#circularG_4
  right: 4px
  top: 4px
  animation-delay: 0.83s
  -o-animation-delay: 0.83s
  -ms-animation-delay: 0.83s
  -webkit-animation-delay: 0.83s
  -moz-animation-delay: 0.83s

#circularG_5
  right: 0
  top: 18px
  animation-delay: 0.97s
  -o-animation-delay: 0.97s
  -ms-animation-delay: 0.97s
  -webkit-animation-delay: 0.97s
  -moz-animation-delay: 0.97s

#circularG_6
  right: 4px
  bottom: 4px
  animation-delay: 1.1s
  -o-animation-delay: 1.1s
  -ms-animation-delay: 1.1s
  -webkit-animation-delay: 1.1s
  -moz-animation-delay: 1.1s

#circularG_7
  left: 18px
  bottom: 0
  animation-delay: 1.24s
  -o-animation-delay: 1.24s
  -ms-animation-delay: 1.24s
  -webkit-animation-delay: 1.24s
  -moz-animation-delay: 1.24s

#circularG_8
  left: 4px
  bottom: 4px
  animation-delay: 1.38s
  -o-animation-delay: 1.38s
  -ms-animation-delay: 1.38s
  -webkit-animation-delay: 1.38s
  -moz-animation-delay: 1.38s

@keyframes bounce_circularG
  0%
    transform: scale(1)

  100%
    transform: scale(0.3)

@-o-keyframes bounce_circularG
  0%
    -o-transform: scale(1)

  100%
    -o-transform: scale(0.3)

@-ms-keyframes bounce_circularG
  0%
    -ms-transform: scale(1)

  100%
    -ms-transform: scale(0.3)

@-webkit-keyframes bounce_circularG
  0%
    -webkit-transform: scale(1)

  100%
    -webkit-transform: scale(0.3)

@-moz-keyframes bounce_circularG
  0%
    -moz-transform: scale(1)

  100%
    -moz-transform: scale(0.3)
@media screen and (max-width: 968px)
  .success > h1
    font-size: 1.6em
</style>