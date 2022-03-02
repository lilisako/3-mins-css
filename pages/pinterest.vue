<template>
  <div>
    <div class="flex my-4">
      <div class="flex justify-center items-center">
        <svg
          class="mx-4 text-red-600 fill-current"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label=""
        ><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" /></svg>
        <p class="mx-4 font-bold">
          Home
        </p>
        <p class="mx-4 font-bold">
          Today
        </p>
      </div>
      <div class="flex justify-start items-center pl-4 w-full h-12 bg-gray-200 rounded-full">
        Japan
      </div>
      <div class="flex justify-center items-center">
        <svg
          class="mx-4 w-8 h-8 text-gray-500 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label=""
          role="img"
        ><path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z" /></svg>
        <svg
          class="mx-4 w-8 h-8 text-gray-500 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label=""
          role="img"
        ><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" /></svg>
        <div class="flex justify-center items-center mx-4 w-8 h-8 font-bold bg-gray-200 rounded-full">
          <p>J</p>
        </div>
        <svg
          class="mx-4"
          height="12"
          width="12"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label=""
          role="img"
        ><path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" /></svg>
      </div>
    </div>
    <div class="flex justify-center items-center font-bold">
      <div class="py-2 mx-3 border-b-2 border-black">
        <p>Explore</p>
      </div>
      <div class="mx-2">
        <p>Profiles</p>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap my-4 mx-12">
        <div v-for="(d, index) in data" :key="index" class="w-1/5">
          <div v-for="(pin, index2) in d" :key="index2" class="px-3">
            <img :src="pin.image" class="my-3 rounded-xl">
            <p class="font-bold">
              {{ pin.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        [
          {
            text: 'Japanese Cherry Blossoms',
            image: 'https://i.pinimg.com/236x/66/53/08/665308499d82d5894bb57b809708298a.jpg'
          },
          {
            text: 'Magic Place',
            image: 'https://i.pinimg.com/236x/8d/02/9b/8d029bdc258e03e1d5a1c42a7aab1524.jpg'
          }
        ],
        [
          {
            text: 'Koyasan & Kumano Kodo: Japan\'s Spiritual Heartland',
            image: 'https://i.pinimg.com/236x/6e/15/13/6e1513bbf0caf3a6798b8d9e57606053.jpg'
          },
          {
            text: '50 Best Things to do in Tokyo, Japan | You Could Travel',
            image: 'https://i.pinimg.com/236x/2e/f5/12/2ef5122e22a08f639e052228c044872e.jpg'
          },
          {
            text: 'Webitonauta Japan is a beautiful country',
            image: 'https://i.pinimg.com/236x/84/0d/f4/840df4c1bab8f47fb6c80cde05653248.jpg'
          }
        ],
        [
          {
            text: '15 Truly Astounding Places To Visit In Japan - Travel Den',
            image: 'https://i.pinimg.com/236x/d0/9a/9d/d09a9d915aef37821f789f91eb572a24.jpg'
          },
          {
            text: 'Cherry blossom 🌸 Japan 🇯🇵',
            image: 'https://i.pinimg.com/236x/c3/0f/86/c30f861ff142248422b8b877e052ea35.jpg'
          },
          {
            text: 'How to Spend 2 Weeks in Japan | 8 Wonderful Itineraries',
            image: 'https://i.pinimg.com/236x/d7/9f/74/d79f74161e444d5b587f49683dafbf81.jpg'
          }
        ],
        [
          {
            text: '',
            image: 'https://i.pinimg.com/236x/f1/0b/78/f10b783d1408ab6e52777ac06c70f867.jpg'
          },
          {
            text: 'Seoul korea😍',
            image: 'https://i.pinimg.com/236x/13/e7/55/13e75517a248110060ae8a4fc9669154.jpg'
          },
          {
            text: '10 Best Things To Do In Osaka, Japan',
            image: 'https://i.pinimg.com/236x/f9/39/c4/f939c4076a3293346a674993384e9904.jpg'
          }
        ],
        [
          {
            text: '',
            image: 'https://i.pinimg.com/236x/4b/32/71/4b327198e93d942274db505add973876.jpg'
          },
          {
            text: 'Kyoto, Japan - Random',
            image: 'https://i.pinimg.com/236x/b5/a2/d3/b5a2d3480f5729c519ccaf5b19d1952e.jpg'
          },
          {
            text: 'JAPAN BUCKET LIST – 33 AWESOME Things To Do In',
            image: 'https://i.pinimg.com/236x/14/f9/bd/14f9bdebc10f0503bba1e115e47b5c69.jpg'
          }
        ]
      ]
    }
  }
}
</script>
