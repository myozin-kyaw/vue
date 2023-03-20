<template>
  <!-- <div v-if="loading">
    <Loading :isLoading="loading" />
  </div> -->
  <div>
    <header id="main-header">
      <div class="main-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a
                  href="#"
                  class="navbar-toggler c-toggler"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div class="navbar-toggler-icon" data-toggle="collapse">
                    <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                    <span
                      class="navbar-menu-icon navbar-menu-icon--middle"
                    ></span>
                    <span
                      class="navbar-menu-icon navbar-menu-icon--bottom"
                    ></span>
                  </div>
                </a>
                <a href="index.html" class="navbar-brand">
                  <img
                    src="@/assets/images/logo.png"
                    class="img-fluid logo"
                    alt=""
                  />
                </a>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div class="menu-main-menu-container">
                    <ul id="top-menu" class="navbar-nav ml-auto">
                      <li class="menu-item"><a href="#">Home</a></li>
                      <li class="menu-item"><a href="#">Movies</a></li>
                      <li class="menu-item"><a href="#">Shows</a></li>
                      <li class="menu-item">
                        <a href="#">Contact Us</a>
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="#">About Us</a></li>
                          <li class="menu-item"><a href="#">Contact</a></li>
                          <li class="menu-item"><a href="#">FAQ</a></li>
                          <li class="menu-item">
                            <a href="#">Privacy-Policy</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Pricing</a>
                            <ul class="sub-menu">
                              <li class="menu-item">
                                <a href="#">Gold Membership</a>
                              </li>
                              <li class="menu-item">
                                <a href="#">Silver Membership</a>
                              </li>
                              <li class="menu-item">
                                <a href="#">Bronze Membership</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mobile-more-menu">
                  <a
                    href="javascript:void(0);"
                    class="more-toggle"
                    id="dropdownMenuButton"
                    data-toggle="more-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-h"></i>
                  </a>
                  <div class="more-menu" aria-labelledby="dropdownMenuButton">
                    <div class="navbar-right position-relative">
                      <ul
                        class="d-flex align-items-center justify-content-end list-inline m-0"
                      >
                        <li>
                          <a href="#" class="search-toggle">
                            <i class="fa fa-search"></i>
                          </a>
                          <div class="search-box iq-search-bar">
                            <form action="#" class="searchbox">
                              <div class="form-group position-relative">
                                <input
                                  type="text"
                                  class="text search-input font-size-12"
                                  placeholder="type here to search..."
                                />
                                <i class="search-link fa fa-search"></i>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li class="nav-item nav-icon">
                          <a href="#" class="search-toggle position-relative">
                            <i class="fa fa-bell"></i>
                            <span class="bg-danger dots"></span>
                          </a>
                          <div class="iq-sub-dropdown">
                            <div class="iq-card shadow-none m-0">
                              <div class="iq-card-body">
                                <!-- Noti Navigation in large screen -->
                                <NotiNavigation v-for="noti in noties" :key="noti.id"
                                  :url="noti.url"
                                  :title="noti.title"
                                  :time="noti.time"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="iq-user-dropdown search-toggle d-flex align-items-center"
                          >
                            <img
                              src="@/assets/images/user/user.png"
                              class="img-fluid user-m rounded-circle"
                              alt=""
                            />
                          </a>
                          <div class="iq-sub-dropdown iq-user-dropdown">
                            <div class="iq-card shadow-none m-0">
                              <div class="iq-card-body p-0 pl-3 pr-3">
                                <!-- Profile Navigation in mobile -->
                                <profile-navigation title="Manage Profile">
                                  <i class="fa fa-user text-primary"></i>
                                </profile-navigation>

                                <profile-navigation title="Settings">
                                  <i class="fa fa-cog text-primary"></i>
                                </profile-navigation>

                                <profile-navigation title="Pricing Plan">
                                  <i class="fa fa-inr text-primary"></i>
                                </profile-navigation>

                                <profile-navigation title="Logout">
                                  <i class="fa fa-sign-out text-primary"></i>
                                </profile-navigation>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="navbar-right menu-right">
                  <ul class="d-flex align-items-center list-inline m-0">
                    <li class="nav-item nav-icon">
                      <a href="#" class="search-toggle device-search">
                        <i class="fa fa-search"></i>
                      </a>
                      <div class="search-box iq-search-bar d-search">
                        <form action="#" class="searchbox">
                          <div class="form-group position-relative">
                            <input
                              type="text"
                              class="text search-input font-size-12"
                              placeholder="type here to search..."
                            />
                            <i class="search-link fa fa-search"></i>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li class="nav-item nav-icon">
                      <a
                        href="#"
                        class="search-toggle"
                        data-toggle="search-toggle"
                      >
                        <i class="fa fa-bell"></i>
                        <span class="bg-danger dots"></span>
                      </a>
                      <div class="iq-sub-dropdown">
                        <div class="iq-card shadow-none m-0">
                          <div class="iq-card-body">
                            <!-- Noti Navigation in large screen -->
                            <NotiNavigation v-for="noti in noties" :key="noti.id"
                              :url="noti.url"
                              :title="noti.title"
                              :time="noti.time"
                            />

                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-icon">
                      <a
                        href="#"
                        class="iq-user-dropdown search-toggle d-flex align-items-center p-0"
                      >
                        <img
                          src="@/assets/images/user/user.png"
                          class="img-fluid user-m rounded-circle"
                          alt=""
                        />
                      </a>
                      <div class="iq-sub-dropdown iq-user-dropdown">
                        <div class="iq-card shadow-none m-0">
                          <div class="iq-card-body p-0 pl-3 pr-3">
                            
                            <!-- Profile Navigation in large screen -->
                            <profile-navigation title="Manage Profile">
                              <i class="fa fa-user text-primary"></i>
                            </profile-navigation>

                            <profile-navigation title="Settings">
                              <i class="fa fa-cog text-primary"></i>
                            </profile-navigation>

                            <profile-navigation title="Pricing Plan">
                              <i class="fa fa-inr text-primary"></i>
                            </profile-navigation>

                            <profile-navigation title="Logout">
                              <i class="fa fa-sign-out text-primary"></i>
                            </profile-navigation>

                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div class="nav-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import ProfileNavigation from '@/components/home/nav/ProfileNavigation.vue'
import NotiNavigation from '@/components/home/nav/NotiNavigation.vue'
// import Loading from "../../components/loading/Loading.vue";

const noties = ref([
  {id: 1, url: '/src/assets/images/notify/thumb-1.jpg', title: 'Captain Marvel', time: 'Just Now'},
  {id: 2, url: '/src/assets/images/notify/thumb-2.jpg', title: 'Dora and The Lost City of Gold', time: '25 mins ago'},
  {id: 3, url: '/src/assets/images/notify/thumb-3.jpg', title: 'Mulan', time: '1h 30 mins ago'}
])

// const loading = ref(true)
// onMounted(() => {
//   setTimeout(() => {
//     loading.value = false
//   }, 3000)
// })
</script>
