<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>

  <div>

    <select @change="setLocale(selectedLan)" v-model="selectedLan">
      <option 
      v-for="(lan,i) in languages" 
      :key="i"
      :value="lan.value"
      >
      {{ lan.text }}
      </option>
    </select>
    
    <h1>{{ $t('whatIsVue') }}</h1>
    <p>{{ $t('whatIsVueAnswer') }}</p>

  </div>

</template>

<script>

export default {
  data() {
    return {
      selectedLan : null,
      languages : [
        { text: 'English', value: 'en' },
        { text: 'Myanmar', value: 'mm' },
      ]
    }
  },
  methods : {
    setLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    },
  }
}
</script>
