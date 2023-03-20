<template>
  <section id="home" class="iq-main-slider p-0">
    <div id="home-slider" class="slider m-0 p-0">
      <!-- Slider Component -->
      <SliderComponent v-for="data in sliderData" :key="data.id"
        :sliderNumber="data.sliderNumber"
        :title="data.title"
        :description="data.description"
        :starring="data.starring"
        :genres="data.action"
        :tags="data.tags"
      />
    </div>
  </section>
</template>

<script setup>
import SliderComponent from "@/components/home/slider/SliderComponent.vue";
import { ref } from "@vue/reactivity";

const sliderData = ref([
  {
    id: 1,
    sliderNumber: "s-bg-1",
    title: "Avengers",
    description: "When the newly crowned Queen Elsa accidentally uses her power to turn things " + 
      "into ice to curse her home in infinte winter, her sister Anna teams up with a mountain man, his playful " +
      "reindeer, and a snowman to change the weather condition.",
    starring: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    genres: "Action",
    tags: "Action, Adventure, Horror"
  },
  {
    id: 2,
    sliderNumber: "s-bg-2",
    title: "Frozen",
    description: "When the newly crowned Queen Elsa accidentally uses her power " +
      "to turn things into ice to curse her home in infinte winter, " +
      "her sister Anna teams up with a mountain man, his playful " +
      "reindeer, and a snowman to change the weather condition.",
    starring: "Kristan Bell, Idina menzel, Jonathan Groff",
    genres: "Animation",
    tags: "Animation, Adventure, Comedy"
  },
  {
    id: 3,
    sliderNumber: "s-bg-3",
    title: "The Conjuring",
    description: "Paranomal investigators Ed and Lorraine Warren work to help a " +
      "family terrorized by a dark presence in their farmhouse.",
    starring: "Patrick Wilson, Vera Farminga, Ron Livingston",
    genres: "Horror",
    tags: "Horror, Mystery, Thriller"
  }
])
</script>

<style></style>
