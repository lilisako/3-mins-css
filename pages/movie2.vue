<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden p-3 w-[300px] h-[649px] tracking-tighter bg-black rounded-lg">
      <div class="flex items-center">
        <img src="~/static/movie/icon2.png" width="30">
      </div>
      <div class="relative my-3 w-full h-full bg-[#ABEBFF]">
        <div class="absolute right-0 w-12 h-full bg-[#006AB4]" />
        <img src="~/static/movie/icon.png" class="absolute right-7">
        <div class="absolute top-12 left-2 z-10">
          <img src="~/static/movie/movie2.png" width="250">
          <div class="flex pt-4">
            <div class="ml-3">
              <p class="text-sm">
                Theater No
              </p>
              <p class="text-2xl font-bold">
                8
              </p>
            </div>
            <div class="ml-3">
              <p class="text-sm">
                Seat
              </p>
              <p class="text-2xl font-bold">
                F22
              </p>
            </div>
            <div class="ml-3">
              <p class="text-sm">
                Ticket Type
              </p>
              <p class="text-2xl font-bold">
                Adult
              </p>
            </div>
          </div>
          <div class="flex pb-4 border-b-2 border-black border-dotted">
            <div class="ml-3">
              <p class="text-sm">
                Date
              </p>
              <p class="text-2xl font-bold">
                2019/7/5
              </p>
            </div>
            <div class="ml-3">
              <p class="text-sm">
                Time
              </p>
              <p class="text-2xl font-bold">
                15:00
              </p>
            </div>
          </div>
          <img src="~/static/movie/barcode.png" class="py-4 mx-auto w-5/6">
        </div>
      </div>
    </div>
  </div>
</template>
