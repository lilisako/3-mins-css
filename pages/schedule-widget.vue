<template>
  <div class="flex justify-center items-center w-screen h-screen font-bold bg-[#EDF0F4]">
    <img src="~/static/weather-widget/holographic.jpg" class="overflow-hidden relative w-[699px] h-[458px] rounded-lg">
    <div class="absolute top-1/2 left-1/2 w-[699px] h-[458px] -translate-x-1/2 -translate-y-1/2">
      <div class="flex justify-center items-center h-full">
        <div class="flex relative justify-center items-center w-[200px] h-[200px] bg-gradient-to-bl from-black/100 to-black/50 rounded-xl">
          <div class="flex items-end ">
            <div class="mx-2 w-1/2 text-center text-white">
              <img src="~/static/schedule-widget/weather.png" class="my-1">
              <p class="text-xs">
                SUN
              </p>
              <p class="text-5xl">
                15
              </p>
            </div>
            <div class="w-1/2 text-xs">
              <div class="my-2">
                <p class="text-[#AFAFAF]">
                  15:00
                </p>
                <p class="text-white">
                  Daily meeting
                </p>
              </div>
              <div class="my-2">
                <p class="text-[#AFAFAF]">
                  16:30
                </p>
                <p class="text-white">
                  Dev meeting
                </p>
              </div>
              <div class="my-2">
                <p class="text-[#AFAFAF]">
                  18:00
                </p>
                <p class="text-white">
                  Gym
                </p>
              </div>
              <div class="mt-2">
                <p class="text-[#AFAFAF]">
                  19:30
                </p>
                <p class="text-white">
                  Movie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
