<template>
  <div class="flex items-center w-screen h-screen font-garamond bg-gray-200">
    <div class="relative py-6 px-8 mx-auto w-80 h-64 bg-white rounded-xl drop-shadow-md">
      <div class="absolute -top-16 left-[100px] w-32 h-32 bg-white rounded-full border-8 border-[#8588F8]" />
      <div class="absolute -top-20 left-20">
        <img src="~/static/popup/docs.png" width="180">
      </div>
      <div class="flex items-end h-full">
        <div>
          <p class="pb-8 text-3xl text-center underline">
            Your email has been confirmed!
          </p>
          <button class="py-2 w-full text-white bg-black rounded-md">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
