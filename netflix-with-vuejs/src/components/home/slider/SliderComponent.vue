<template>
  <div class="slide slick-bg" :class="sliderNumber">
    <div class="container-fluid position-relative h-100">
      <div class="slider-inner h-100">
        <div class="row align-items-center h--100">
          <div class="col-xl-6 col-lg-12 col-md-12">
            <a href="javascript:void(0)">
              <div
                class="channel-logo p-0"
                data-animation-in="fadeInLeft"
                data-delay-in="0.5"
              >
                <img src="@/assets/images/logo.png" class="c-logo" alt="" />
              </div>
            </a>
            <h1
              class="slider-text big-title title text-uppercase"
              data-animation-in="fadeInLeft"
              data-delay-in="0.6"   
            >
              {{ title }}
            </h1>
            <div
              class="d-flex flex-wrap align-items-center fadeInLeft animated"
              data-animation-in="fadeInLeft"
              style="opacity: 1"
            >
              <div
                class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
              >
                <ul
                  class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                >
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star-half"></i></li>
                </ul>
                <span class="text-white ml-2">7.3(imbd)</span>
              </div>
              <div class="d-flex align-items-center mt-2 mt-md-3">
                <span class="badge badge-secondary p-2">16+</span>
                <span class="ml-3">2h 21min</span>
              </div>
            </div>
            <p data-animation-in="fadeInUp">
              {{ description }}
            </p>
            <div
              class="trending-list"
              data-animation-in="fadeInUp"
              data-delay-in="1.2"
            >
              <div class="text-primary title starring">
                Starring : <span class="text-body">{{ starring }}</span>
              </div>
              <div class="text-primary title genres">
                Genres : <span class="text-body">{{ genres }}</span>
              </div>
              <div class="text-primary title tag">
                Tags :
                <span class="text-body">{{ tags }}</span>
              </div>
            </div>
            <div
              class="d-flex align-items-center r-mb-23 mt-4"
              data-animation-in="fadeInUp"
              data-delay-in="1.2"
            >
              <a href="#" class="btn btn-hover iq-button"
                ><i class="fa fa-play mr-3"></i>Play Now</a
              >
              <a href="#" class="btn btn-link">More Details</a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-12 col-md-12 trailor-video">
          <a href="video/trailer.mp4" class="video-open playbtn">
            <img src="@/assets/images/play.png" class="play" alt="" />
            <span class="w-trailor">Watch Trailer</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["sliderNumber", "title", "description", "starring", "genres", "tags"]);
</script>

<style scoped>
#home-slider .slick-bg.s-bg-1 {
  background-image: url(@/assets/images/slider/slider1.jpg);
}
#home-slider .slick-bg.s-bg-2 {
  background-image: url(@/assets/images/slider/slider2.jpg);
}
#home-slider .slick-bg.s-bg-3 {
  background-image: url(@/assets/images/slider/slider3.jpg);
}
</style>
