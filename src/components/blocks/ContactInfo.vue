<template>
  <div class="personal-info">
    <h3 class="block-title">Контактная информация</h3>
    <div class="block-form">
      <div class="flex-item">
          <text-input
              type="text"
              id="country"
              placeholder="Россия"
              :content="{text: 'Страна', required: false}"
              :v="v.country"
              :msg="v.country.alpha ? `Название страны от ${v.district.$params.minLength.min} до ${v.district.$params.maxLength.max} букв`
              :'Поле должно содержать только буквы'"
          />
        <text-input
            type="text"
            id="region"
            placeholder="Область"
            :content="{text: 'Московская', required: false}"
            :v="v.district"
            :msg="v.district.alpha ? `Название области от ${v.district.$params.minLength.min} до ${v.district.$params.maxLength.max} букв`
            :'Поле должно содержать только буквы'"
        />
        <text-input
            type="text"
            id="city"
            placeholder="Москва"
            :content="{text: 'Город', required: true}"
            :v="v.city"
            :msg="v.city.alpha ?  `Название города от ${v.city.$params.minLength.min} до ${v.city.$params.maxLength.max} букв` :'Поле должно содержать только буквы'"
        />
      </div>
      <div class="flex-item">
        <text-input
            type="text"
            id="street"
            placeholder="Ленина"
            :content="{text: 'Улица', required: false}"
            :v="v.street"
            :msg="v.street.alphaNum ?  `Название улицы от ${v.street.$params.minLength.min} до ${v.street.$params.maxLength.max} букв и цифр`
            :'Поле должно содержать только буквы и цифры'"
        />
        <text-input
            type="text"
            id="house"
            placeholder="д. №1"
            :content="{text: 'Номер дома', required: false}"
            :v="v.house"
            :msg="v.house.alphaNum ?  `Номер дома до ${v.house.$params.maxLength.max} букв и цифр` :'Поле должно содержать только буквы и цифры'"
        />
        <text-input
            type="text"
            id="index"
            placeholder="Индекс"
            :content="{text: 'Индекс', required: false}"
            :v="v.index"
            :msg="v.index.numeric ?  `Индекс до ${v.index.$params.maxLength.max} цифр` :'Поле должно содержать и цифры'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../inputs/TextInput";
export default {
  name: "ContactInfo",
  components: {TextInput},
  props: {v: Object},
  comments: {TextInput}
}
</script>

<style lang="sass">

</style>