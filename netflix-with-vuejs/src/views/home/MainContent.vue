<script setup>
import { ref } from "@vue/reactivity";
import MovieContainer from "@/components/home/main/movie-slider/MovieContainer.vue";
import ParallexCard from '@/components/home/main/parallex/ParallexCard.vue'
import Trending from '@/components/home/main/trending/Trending.vue'

const favourite = ref([
  {
    id: 1,
    name: "Insidious",
    img: "/src/assets/images/favorite/f1.jpg",
    rating: "16+",
    period: "1h 43min",
    loveIn: "19+",
  },
  {
    id: 2,
    name: "War",
    img: "/src/assets/images/favorite/f2.jpg",
    rating: "12+",
    period: "2h 34min",
    loveIn: "58+",
  },
  {
    id: 3,
    name: "Five Feet Apart",
    img: "/src/assets/images/favorite/f3.jpg",
    rating: "18+",
    period: "2h 57min",
    loveIn: "19+",
  },
  {
    id: 4,
    name: "Chhichore",
    img: "/src/assets/images/favorite/f4.jpg",
    rating: "10+",
    period: "2h 23min",
    loveIn: "19+",
  },
  {
    id: 5,
    name: "Doctor Strange",
    img: "/src/assets/images/favorite/f5.jpg",
    rating: "12+",
    period: "1h 55min",
    loveIn: "19+",
  },
]);

const popular = ref([
  {
    id: 1,
    name: "Mulan",
    img: "/src/assets/images/popular/u1.jpg",
    rating: "10+",
    period: "2h",
    loveIn: "89+",
  },
  {
    id: 2,
    name: "Laxmii",
    img: "/src/assets/images/popular/u2.jpg",
    rating: "18+",
    period: "2h 21min",
    loveIn: "35+",
  },
  {
    id: 3,
    name: "Captain America",
    img: "/src/assets/images/popular/u3.jpg",
    rating: "75+",
    period: "2h 40min",
    loveIn: "30+",
  },
  {
    id: 4,
    name: "Life of Pie",
    img: "/src/assets/images/popular/u4.jpg",
    rating: "20+",
    period: "1h 50min",
    loveIn: "10+",
  },
  {
    id: 5,
    name: "Mission Mangal",
    img: "/src/assets/images/popular/u5.jpg",
    rating: "30+",
    period: "2h 30min",
    loveIn: "24+",
  },
]);

const suggested = ref([
  {
    id: 1,
    name: "Basketball",
    img: "/src/assets/images/suggested/01.jpg",
    rating: "NBA",
    period: "Sports",
    loveIn: "89+",
  },
  {
    id: 2,
    name: "VolleyBall",
    img: "/src/assets/images/suggested/02.jpg",
    rating: "PRO",
    period: "Sports",
    loveIn: "35+",
  },
  {
    id: 3,
    name: "BasketBall",
    img: "/src/assets/images/suggested/03.jpg",
    rating: "LSU",
    period: "Sports",
    loveIn: "30+",
  },
  {
    id: 4,
    name: "Cricket",
    img: "/src/assets/images/suggested/04.jpg",
    rating: "T-20",
    period: "Sports",
    loveIn: "10+",
  },
  {
    id: 5,
    name: "Golf",
    img: "/src/assets/images/suggested/05.jpg",
    rating: "PGA",
    period: "Sports",
    loveIn: "24+",
  },
]);

const recommended = ref([
  {
    id: 1,
    name: "The Martian",
    img: "/src/assets/images/tvthrillers/01.jpg",
    rating: "15+",
    period: "2h 15min",
    loveIn: "24+",
  },
  {
    id: 2,
    name: "Unhinged",
    img: "/src/assets/images/tvthrillers/02.jpg",
    rating: "12+",
    period: "1h 30min",
    loveIn: "24+",
  },
  {
    id: 3,
    name: "Kingsman",
    img: "/src/assets/images/tvthrillers/03.jpg",
    rating: "18+",
    period: "3h",
    loveIn: "24+",
  },
  {
    id: 4,
    name: "Casino Royal",
    img: "/src/assets/images/tvthrillers/04.jpg",
    rating: "18+",
    period: "2h 45min",
    loveIn: "24+",
  },
  {
    id: 5,
    name: "Mission Impossible",
    img: "/src/assets/images/tvthrillers/05.jpg",
    rating: "15+",
    period: "2h 35min",
    loveIn: "24+",
  },
])
</script>

<template>
  <!-- main content starts  -->
  <div class="main-content">
    <!-- favorite section starts   -->
    <section id="iq-favorites">
      <MovieContainer containerTitle="Top Picks For You" :type="favourite" />
    </section>

    <!-- favourite section ends -->

    <!-- upcoming contents section starts  -->
    <section id="iq-upcoming-movie">
      <MovieContainer containerTitle="Popular Movies" :type="popular" />
    </section>
    <!-- upcoming contents section ends -->

    <!-- top ten trending  -->

    <!-- <section id="iq-topten">
      
    </section> -->

    <section id="iq-suggested" class="s-margin">
      <MovieContainer containerTitle="Suggested Sports" :type="suggested" />
    </section>

    <!-- parallax section  -->
    <section>
      <ParallexCard 
        name="Avatar"
        ratingStar="7.8(Imbd)"
        ratingNumber="9+"
        period="2h 42min"
        desc="A paraplegic Marine dispatched to the moon Pandora on a unique
          mission becomes torn between following his orders and protecting the
          world he feels is his home."
        img="/src/assets/images/parallax/avatar.jpg"
      />
    </section>

    <!-- trending section  -->
    <section id="iq-trending" class="s-margin">
      <Trending />
    </section>

    <section id="iq-suggested" class="s-margin">
      <MovieContainer containerTitle="Recommended For You" :type="recommended" />
    </section>
  </div>

  <!-- main content ends  -->
</template>

<style></style>
