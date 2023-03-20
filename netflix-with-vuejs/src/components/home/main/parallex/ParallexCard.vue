<template>
  <div id="parallex" class="parallax-window">
    <div class="container-fluid h-100">
      <div
        class="
          row
          align-items-center
          justify-content-center
          h-100
          parallaxt-details
        "
      >
        <div class="col-lg-4 r-mb-23">
          <div class="text-left">
            <a href="javascript:void(0)">
              <h1 class="parallax-heading">{{ name }}</h1>
            </a>
            <div class="parallax-ratting d-flex align-items-center mt-3 mb-3">
              <ul
                class="
                  ratting-start
                  p-o
                  m-0
                  list-inline
                  text-primary
                  d-flex
                  align-items-center
                  justify-content-left
                "
              >
                <li>
                  <a href="#" class="text-primary"
                    ><i class="fa fa-star"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-primary"
                    ><i class="pl-2 fa fa-star"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-primary"
                    ><i class="pl-2 fa fa-star"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-primary"
                    ><i class="pl-2 fa fa-star"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-primary"
                    ><i class="pl-2 fa fa-star-half-o"></i
                  ></a>
                </li>
              </ul>
              <span class="text-white ml-3">{{ ratingStar }}</span>
            </div>
            <div class="movie-time d-flex align-items-center mb-3">
              <div class="badge badge-secondary p-1 mr-2">
                {{ ratingNumber }}
              </div>
              <span class="text-white">{{ period }}</span>
            </div>
            <p>
              {{ desc }}
            </p>
            <div class="parallax-buttons">
              <a href="#" class="btn btn-hover">Play Now</a>
              <a href="#" class="btn btn-link">More Details</a>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="parallax-img">
            <a href="#"><img :src="img" alt="" class="img-fluid w-100" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["name", "ratingStar", "ratingNumber", "period", "desc", "img"]);
</script>

<style scoped>
.parallax-window {
  height: 100%;
  padding: 100px 0;
  position: relative;
  background: url(/src/assets/images/parallax/avatar.jpg) center center;
  background-size: cover;
  background-attachment: fixed;
}
</style>