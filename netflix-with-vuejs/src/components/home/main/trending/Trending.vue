<script setup>
import TrendingSlider from '@/components/home/main/trending/TrendingSlider.vue'
import TrendingSliderDetail from '@/components/home/main/trending/TrendingSliderDetail.vue'
import { ref } from '@vue/reactivity'

const trendingSlider = ref([
  {id: 1, mainImg: '/src/assets/images/trending/01.jpg'},
  {id: 2, mainImg: '/src/assets/images/trending/02.jpg'},
  {id: 3, mainImg: '/src/assets/images/trending/03.jpg'},
  {id: 4, mainImg: '/src/assets/images/trending/04.jpg'},
  {id: 5, mainImg: '/src/assets/images/trending/05.jpg'},
  {id: 6, mainImg: '/src/assets/images/trending/06.jpg'}
]); 

const trendings = ref([
  {
    id: 1,
    mainImg: '/src/assets/images/trending/01.jpg',
    mainTitle: 'The Crown',
    mainRating: '19+',
    currentSeason: '3 Seasons',
    latestYear: 2023,
    seasonNumber: 5,
    mainDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.',
    starring: 'Clarie Foy, Olivia Colman, Imelda Staunton',
    generes: 'Biography',
    creator: 'Peter Morgan',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/ce1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/ce2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/ce3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/ce4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/ce5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/ce1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/ce2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/ce3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/ce4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/ce5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data1', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data2', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data3', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data4', extraClass: 'none', selected: false}
  },
  {
    id: 2,
    mainImg: '/src/assets/images/trending/02.jpg',
    mainTitle: 'Big Bang Theory',
    mainRating: '15+',
    currentSeason: '2 Seasons',
    latestYear: 2020,
    seasonNumber: 3,
    mainDesc: 'A woman who moves into an appartment across the hall from two brilliant but social awkward physicists shows then how little they know about life outside of the laboratory.',
    starring: 'Jhonny Galecki, Jim Parsons , Kaley Cuoco',
    generes: 'Comedy Romance',
    creator: 'Chuck Lorre, Bill Prady',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/bbt1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/bbt2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/bbt4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/bbt5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/bbt1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/bbt2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/bbt4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/bbt5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data5', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data6', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data7', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data8', extraClass: 'none', selected: false}
  },
  {
    id: 3,
    mainImg: '/src/assets/images/trending/03.jpg',
    mainTitle: 'Peaky Blinders',
    mainRating: '11+',
    currentSeason: '5 Seasons',
    latestYear: 2020,
    seasonNumber: 3,
    mainDesc: ' A gangster family epic set in 1990s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    starring: 'Cillian Murphy, Paul Anderson, Helen McCrory',
    generes: 'Crime, Drama',
    creator: 'Steven Knight',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/pb1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/pb2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/pb4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/pb5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/pb1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/pb2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/pb4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/pb5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/ce3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data9', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data10', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data11', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data12', extraClass: 'none', selected: false}
  },
  {
    id: 4,
    mainImg: '/src/assets/images/trending/04.jpg',
    mainTitle: 'Narcos',
    mainRating: '18+',
    currentSeason: '3 Seasons',
    latestYear: 2013,
    seasonNumber: 21,
    mainDesc: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
    starring: 'Pedro Pascal, Wagner Moura, Boyd Holbrook',
    generes: 'Biography, Crime, Drama',
    creator: 'Carlo Bernard, Chris Brancato, Doug Miro',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/n1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/n2.png', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/n3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/n4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/n1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/n2.png', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/n3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/n4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data13', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data14', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data15', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data16', extraClass: 'none', selected: false}
  },
  {
    id: 5,
    mainImg: '/src/assets/images/trending/05.jpg',
    mainTitle: 'FRIENDS',
    mainRating: '7+',
    currentSeason: '10 Seasons',
    latestYear: '1994 - 2004',
    seasonNumber: 6,
    mainDesc: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
    starring: 'Jennifer Aniston, Courteney Cox, Lisa Kudrow',
    generes: 'Comedy , Romance',
    creator: 'David Crane, Marta Kauffman',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/fe1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/fe3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/fe4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/fe5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/fe1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/fe3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/fe4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/fe5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data17', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data18', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data19', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data20', extraClass: 'none', selected: false}
  },
  {
    id: 6,
    mainImg: '/src/assets/images/trending/06.jpg',
    mainTitle: 'Mirzapur',
    mainRating: '18+',
    currentSeason: '2 Seasons',
    latestYear: '2018',
    seasonNumber: 11,
    mainDesc: 'A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.',
    starring: 'Pankaj Tripathi, Ali Fazal, Divyendu Sharma',
    generes: 'Action, Crime, Drama',
    creator: 'Puneet Krishna, Karan Anshuman',
    episodes: [
      {id: 1, name: 'Episode 1', episodeImg: '/src/assets/images/episodes/m1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Episode 2', episodeImg: '/src/assets/images/episodes/m2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Episode 3', episodeImg: '/src/assets/images/episodes/m3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Episode 4', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Episode 5', episodeImg: '/src/assets/images/episodes/m5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    trailers: [
      {id: 1, name: 'Trailer 1', episodeImg: '/src/assets/images/episodes/m1.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Trailer 2', episodeImg: '/src/assets/images/episodes/m2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Trailer 3', episodeImg: '/src/assets/images/episodes/m3.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Trailer 4', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Trailer 5', episodeImg: '/src/assets/images/episodes/m5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    otherTrailers: [
      {id: 1, name: 'Other Trailer 1', episodeImg: '/src/assets/images/episodes/bbt3.jpg', period: '1h 30min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 2, name: 'Other Trailer 2', episodeImg: '/src/assets/images/episodes/fe2.jpg', period: '1h 45min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 3, name: 'Other Trailer 3', episodeImg: '/src/assets/images/episodes/m4.jpg', period: '1h 35min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 4, name: 'Other Trailer 4', episodeImg: '/src/assets/images/episodes/pb3.jpg', period: '1h 20min', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'},
      {id: 5, name: 'Other Trailer 5', episodeImg: '/src/assets/images/episodes/n5.jpg', period: '2h', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quisquam iure tempore earum sequi.'}
    ],
    tranding_overview: {name: 'OVERVIEW', id: 'trending-data21', extraClass: 'active show', selected: true},
    tranding_episodes: {name: 'EPISODES', id: 'trending-data22', extraClass: 'none', selected: false},
    tranding_trailers: {name: 'TRAILERS', id: 'trending-data23', extraClass: 'none', selected: false},
    tranding_similiar_like_this: {name: 'SIMILIAR LIKE THIS', id: 'trending-data24', extraClass: 'none', selected: false}
  }
])
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 overflow-hidden">
        <div
          class="iq-main-header d-flex align-items-center justify-content-between"
        >
          <h4 class="main-title">Trending</h4>
        </div>
        <div class="trending-contens">
          <ul
            id="trending-slider-nav"
            class="list-inline p-0 mb-0 row align-items-center"
          >
            <TrendingSlider v-for="slider in trendingSlider" :key="slider.id"
                :img="slider.mainImg"
            />
          </ul>
          <ul
            id="trending-slider"
            class="list-inline p-0 m-0 d-flex align-items-center"
          > 
            <TrendingSliderDetail v-for="trending in trendings" :key="trending.id" :trending="trending" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
