<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden w-[300px] h-[649px] font-bold bg-[#FFE81C] rounded-lg">
      <div class="mx-4">
        <div class="flex justify-between items-center my-4">
          <img src="~/static/delivery/back.png" width="25">
        </div>
        <div class="p-4 bg-white rounded-xl border-2 border-black">
          <div class="flex justify-between items-center">
            <p>CREDIT CARD</p>
            <img src="~/static/delivery/visa.png" width="80">
          </div>
          <div class="flex justify-between mt-12">
            <p>4111-****-****-1111</p>
            <p>10/22</p>
          </div>
        </div>
        <div class="p-4 my-4 bg-white rounded-xl border-2 border-black">
          <div class="flex my-2">
            <img src="~/static/delivery/ramen1.png" width="80">
            <div class="relative ml-3 w-full">
              <p class="text-sm">
                Tonkotsu Ramen
              </p>
              <p class="absolute right-0 bottom-0">
                ¥1000
              </p>
            </div>
          </div>
          <div class="flex my-2">
            <img src="~/static/delivery/ramen2.png" width="80">
            <div class="relative ml-3 w-full">
              <p class="text-sm">
                Shrimp Ramen
              </p>
              <p class="absolute right-0 bottom-0">
                ¥1000
              </p>
            </div>
          </div>
          <div class="flex my-2">
            <img src="~/static/delivery/ramen3.png" width="80">
            <div class="relative ml-3 w-full">
              <p class="text-sm">
                Special Chicken Ramen
              </p>
              <p class="absolute right-0 bottom-0">
                ¥1250
              </p>
            </div>
          </div>
          <div class="flex my-2 border-b-2 border-black">
            <div class="relative w-full">
              <p class="text-sm">
                Delivery Fee
              </p>
              <p class="absolute right-0 bottom-0">
                ¥250
              </p>
            </div>
          </div>
          <div class="flex justify-between text-xl">
            <p>Total</p>
            <p>¥3500</p>
          </div>
        </div>
        <button class="py-3 w-full text-xl text-white bg-black rounded-lg">
          Complete Order
        </button>
      </div>
    </div>
  </div>
</template>
