<template>
<main class="wrap" :class="{hidden: popUpActive}">
  <div class="mobile-header">
    <a href="#" @click.prevent="showProfile =!showProfile"><span>&#129044;</span>{{showProfile ? 'Вернуться к форме' : 'Показать профиль'}}</a>
  </div>
  <Form
   :v="$v.form"
   v-on:submit="submitForm"
  />
  <Profile
    :userInfo="form"
    :class="{active: showProfile}"
  />
  <PopUp
    v-if="popUpActive"
    :loading="loading"
    :success="success"
    v-on:close="popUpActive = false"
  />
</main>
</template>

<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators';
import Form from "./Form";
import Profile from "./Profile";
import PopUp from "./PopUp";

const alpha = (val) => /^[a-zа-яё]*$/i.test(val.replace(/\s+/g, ''));
const alphaNum = (val) => /^[a-zа-яё0-9]*$/i.test(val.replace(/\s+/g, ''));

export default {
  name: "Registration",
  components: {Form, Profile, PopUp},
  data () {
    return {
      form: {
        personalInfo: {
          surname: '',
          name: '',
          lastName: '',
          dob: '',
          phone: '',
          sex: ''
        },
        contactInfo: {
          country: '',
          district: '',
          city: '',
          street: '',
          house: '',
          index: ''
        },
        documents: {
          type: '',
          series: '',
          number: '',
          issuedBy: '',
          dateOfIssue: ''
        },
        additional: {
          clientGroup: [],
          doctor: '',
          notifications: ''
        }
      },
      newUser: {},
      loading: true,
      success: true,
      popUpActive: false,
      showProfile: false,
    }
  },
  methods: {
    submitForm() {
      if (this.$v.form.$invalid) {
        this.showInvalidFields();
      } else {
        this.newUser = Object.assign({}, this.form);
        this.popUpActive = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000)
        // this.postJson('https://server.ru', this.user)
        //     .then(data => {
        //       this.success = data.result === true;
        //       this.loading = false;
        //     });
        console.log(JSON.stringify(this.newUser))
      }
    },
    showInvalidFields() {
      this.$v.form.$touch()
      const invalidFields = Array.from(this.$el.querySelectorAll('.input-field'));
      setTimeout(() => {
        let firstInvalid = invalidFields.find(el => el.classList.contains('invalid'));
        if (firstInvalid) {
          firstInvalid.parentNode.parentNode.parentNode.parentNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, 1);
    },
    closePopUp() {
      this.popUpActive = false
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            console.log(error)});
    }
  },
  validations: {
    form: {
      personalInfo: {
        surname: {required, alpha, minLength: minLength(2), maxLength: maxLength(30), },
        name: {required, minLength: minLength(3), maxLength: maxLength(30), alpha},
        lastName: {minLength: minLength(3), maxLength: maxLength(30), alpha},
        dob: {
          required,
          check(val) {
            const dateMax = new Date();
            const dateMin = new Date('1900-03-31');
            return new Date(val) < dateMax && new Date(val) > dateMin;
          }
        },
        phone: {
          required,
          check(val) {
            return val.replace(/\D/g, '').length === 11
          }
        },
        sex: {}
      },
      contactInfo: {
        country: { minLength: minLength(2), maxLength: maxLength(15), alpha},
        district: { minLength: minLength(2), maxLength: maxLength(20), alpha},
        city: {required, minLength: minLength(2), maxLength: maxLength(20), alpha},
        street: { minLength: minLength(2), maxLength: maxLength(30), alphaNum},
        house: { maxLength: maxLength(10), alphaNum},
        index: {numeric,maxLength: maxLength(10)}
      },
      documents: {
        type: {required},
        series: {maxLength: maxLength(8),minLength: minLength(2) , alphaNum},
        number: {maxLength: maxLength(14),minLength: minLength(5), numeric},
        issuedBy: {maxLength: maxLength(20),  minLength: minLength(2), alphaNum},
        dateOfIssue: {
          required,
          check(val) {
            const dateMax = new Date();
            const dateMin = new Date('1900-03-31');
            return new Date(val) < dateMax && new Date(val) > dateMin;
          }}
      },
      additional: {
        clientGroup: {required},
        doctor: {},
        notifications: {}
      }
    }
  }
}
</script>

<style lang="sass">
.wrap
  display: flex
  min-height: inherit
  padding-right: 45%
  position: relative
  &.hidden
    overflow: hidden
    max-height: 100vh
.mobile-header
  display: none
@media screen and (max-width: 968px)
  .mobile-header
    display: block
    position: fixed
    z-index: 777
    top: 0
    left: 0
    width: 100%
    height: 10vh
    padding-top: 3vh
    text-align: center
    background: rgb(255,255,255)
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 16%)
    & > a
      text-decoration: none
      color: #03156f
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      & > span
        font-size: 2em
        margin-right: 5px
  .wrap
    padding-right: 0
    flex-wrap: wrap
    padding-top: 10vh
    width: 100%
</style>