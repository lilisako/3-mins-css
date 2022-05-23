<template>
  <div class="flex justify-center items-center w-screen h-screen font-dmsans bg-[#EDF0F4]">
    <img src="~/static/weather-widget/holographic.jpg" class="overflow-hidden relative w-[699px] h-[458px] rounded-lg">
    <div class="absolute top-1/2 left-1/2 w-[699px] h-[458px] -translate-x-1/2 -translate-y-1/2">
      <div class="flex justify-center items-center h-full">
        <div class="relative w-[307px] h-[136px] bg-gradient-to-bl from-black/100 to-black/50 rounded-xl">
          <div class="flex justify-center items-center pt-6">
            <div class="mx-2">
              <div class="flex justify-center items-center w-[55px] h-[55px] bg-gradient-to-bl from-black/100 to-black/20 rounded-xl">
                <p class="text-[36px] font-bold text-white">
                  23
                </p>
              </div>
              <p class="my-1 text-xs font-bold text-center text-white">
                DAYS
              </p>
            </div>
            <div class="mx-2">
              <div class="flex justify-center items-center w-[55px] h-[55px] bg-gradient-to-bl from-black/100 to-black/20 rounded-xl">
                <p class="text-[36px] font-bold text-white">
                  8
                </p>
              </div>
              <p class="my-1 text-xs font-bold text-center text-white">
                HOURS
              </p>
            </div>
            <div class="mx-2">
              <div class="flex justify-center items-center w-[55px] h-[55px] bg-gradient-to-bl from-black/100 to-black/20 rounded-xl">
                <p class="text-[36px] font-bold text-white">
                  12
                </p>
              </div>
              <p class="my-1 text-xs font-bold text-center text-white">
                MINUTES
              </p>
            </div>
            <div class="mx-2">
              <div class="flex justify-center items-center w-[55px] h-[55px] bg-gradient-to-bl from-black/100 to-black/20 rounded-xl">
                <p class="text-[36px] font-bold text-white">
                  11
                </p>
              </div>
              <p class="my-1 text-xs font-bold text-center text-white">
                SECONDS
              </p>
            </div>
          </div>
          <p class="text-xs font-bold text-center text-[#969696]">
            UNTIL THE FINAL EXAM📚
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
