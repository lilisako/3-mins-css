<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden w-[300px] h-[649px] font-bold bg-[#FFE81C] rounded-lg">
      <div class="m-6">
        <div class="flex items-center my-2">
          <img src="~/static/delivery/profile.png" width="50">
          <p class="ml-3 font-bold">
            Good evening,<br>Jess👋
          </p>
        </div>
        <div class="flex justify-between items-center py-2 px-4 bg-white rounded-xl border-2 border-black">
          <p class="text-sm font-bold text-gray-400">
            Search...
          </p>
          <img src="~/static/delivery/search.png" width="30">
        </div>
        <div class="my-2">
          <p class="text-sm text-center">
            <span class="mx-2 underline">Delivery</span><span class="mx-2">Takeout</span>
          </p>
        </div>
        <div class="my-4">
          <p class="mb-2 text-sm">
            Top Categories
          </p>
          <div class="grid grid-cols-2 gap-2">
            <div class="relative w-32 h-32 bg-white rounded-xl border-2 border-black">
              <img src="~/static/delivery/sushi.png" class="absolute top-4 left-4 z-10">
              <p class="absolute bottom-2 left-2 text-sm">
                Sushi
              </p>
            </div>
            <div class="relative w-32 h-32 bg-white rounded-xl border-2 border-black">
              <img src="~/static/delivery/hamburger.png" class="absolute bottom-8 left-4">
              <p class="absolute bottom-2 left-2 text-sm">
                Hamburger
              </p>
            </div>
            <div class="relative w-32 h-32 bg-white rounded-xl border-2 border-black">
              <img src="~/static/delivery/ramen.png" class="absolute bottom-4 left-4 z-10">
              <p class="absolute bottom-2 left-2 text-sm">
                Ramen
              </p>
            </div>
            <div class="relative w-32 h-32 bg-white rounded-xl border-2 border-black">
              <img src="~/static/delivery/pizza.png" class="absolute bottom-6 left-4 z-10">
              <p class="absolute bottom-2 left-2 text-sm">
                Pizza
              </p>
            </div>
          </div>
          <p class="text-sm text-right underline">
            See more
          </p>
        </div>
        <div class="my-4">
          <p class="text-sm">
            Nearest
          </p>
          <div class="flex items-center p-1 my-2 bg-white rounded-xl border-2 border-black">
            <img src="~/static/delivery/tanaka-sushi.png" class="w-1/3">
            <div class="ml-3">
              <p class="text-lg">
                Tanaka Sushi
              </p>
              <p class="text-xs text-gray-400">
                25-35 mins<br>Delivery fee ¥250
              </p>
            </div>
          </div>
          <div class="flex items-center p-1 my-2 bg-white rounded-xl border-2 border-black">
            <img src="~/static/delivery/yamada-ramen.png" class="w-1/3">
            <div class="ml-3">
              <p class="text-lg">
                Yamada Ramen
              </p>
              <p class="text-xs text-gray-400">
                25-35 mins<br>Delivery fee ¥250
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
