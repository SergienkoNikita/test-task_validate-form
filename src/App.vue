<template>
  <div id="app">
    <Registration/>
  </div>
</template>

<script>
import Registration from "./components/Registration";
export default {
  name: 'App',
  components: {Registration},
}
</script>

<style lang="sass">
@font-face
  font-family: OpenSans
  font-weight: normal
  src: url("./fonts/OpenSans-Regular.ttf")
@font-face
  font-family: OpenSans
  font-weight: bold
  src: url("./fonts/OpenSans-Bold.ttf")
@font-face
  font-family: OpenSans
  font-weight: 800
  src: url("./fonts/OpenSans-ExtraBold.ttf")
@font-face
  font-family: OpenSans
  font-weight: bold
  src: url("./fonts/OpenSans-Bold.ttf")
@font-face
  font-family: OpenSans
  font-weight: 300
  src: url("./fonts/OpenSans-Light.ttf")
*
  margin: 0
  padding: 0
  box-sizing: border-box
#app
  font-family: OpenSans, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  min-height: 100vh

</style>
