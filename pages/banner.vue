<template>
  <div class="flex items-center mx-auto w-screen h-screen font-fredoka bg-gray-200">
    <div class="mx-auto">
      <div class="flex relative items-center my-4 text-center bg-[#E3FFD1] rounded-xl border-8 border-[#5A8F48]">
        <img src="~/static/banner/close.png" class="absolute top-4 left-4" width="20">
        <div class="pl-4 w-full">
          <p class="text-4xl text-[#5A8F48]">
            Congratulation!
          </p>
          <p class="text-[#6BAB55]">
            Yay! Your account has been successfully created!
          </p>
        </div>
        <div>
          <img src="~/static/banner/success.png" width="180">
        </div>
      </div>

      <div class="flex relative items-center my-4 text-center bg-[#FFF4F4] rounded-xl border-8 border-[#CD2828] justuft-between">
        <img src="~/static/banner/close.png" class="absolute top-4 left-4" width="20">
        <div class="pl-4 w-full">
          <p class="text-4xl text-[#CD2828]">
            Ooops!
          </p>
          <p class="text-[#D95D5D]">
            Please enter the username you want to use!
          </p>
        </div>
        <div class="mx-auto">
          <img src="~/static/banner/fail.png" width="140">
        </div>
      </div>
    </div>
  </div>
</template>
