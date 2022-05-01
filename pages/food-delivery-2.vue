<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden px-4 w-[300px] h-[649px] font-bold bg-[#FFE81C] rounded-lg">
      <div class="relative">
        <div class="flex justify-between items-center my-4">
          <img src="~/static/delivery/back.png" width="25">
          <img src="~/static/delivery/basket.png" width="35">
        </div>
        <img src="~/static/delivery/yamada-ramen.png">
        <div class="p-2 my-2 bg-white rounded-xl border-2 border-black">
          <p class="text-lg">
            Yamada Ramen
          </p>
          <div class="flex justify-between items-end">
            <div>
              <p class="text-xs">
                25-35 mins
              </p>
              <p class="text-xs">
                Delivery fee ¥250
              </p>
            </div>
            <div class="py-1 w-6 h-6 text-xs text-center text-white bg-black rounded-full">
              4.7
            </div>
          </div>
        </div>
        <div>
          <p>Menu</p>
          <div class="flex p-2 my-2 bg-white rounded-xl border-2 border-black">
            <img src="~/static/delivery/ramen1.png">
            <div class="relative mx-2 w-full">
              <p>Tonkotsu Ramen</p>
              <p class="absolute right-0 bottom-0">
                ¥1000
              </p>
            </div>
          </div>
          <div class="flex p-2 my-2 bg-white rounded-xl border-2 border-black">
            <img src="~/static/delivery/ramen2.png">
            <div class="relative mx-2 w-full">
              <p>Shrimp Ramen</p>
              <p class="absolute right-0 bottom-0">
                ¥1000
              </p>
            </div>
          </div>
          <div class="flex p-2 my-2 bg-white rounded-xl border-2 border-black">
            <img src="~/static/delivery/ramen3.png">
            <div class="relative mx-2 w-full">
              <p>Special Chicken Ramen</p>
              <p class="absolute right-0 bottom-0">
                ¥1250
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
