<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden relative p-4 w-[300px] h-[649px] font-kanit tracking-tighter bg-[#FAFF00] rounded-lg">
      <img src="~/static/select-user-type/background.png" class="absolute bottom-0 left-0">
      <div class="absolute top-20 left-3 w-11/12">
        <p class="text-xl text-center">
          Select your account type
        </p>
        <div class="flex items-center p-4 my-3 w-full bg-black">
          <div class="relative w-16 h-16 bg-[#FFE600] rounded-full border-4 border-white">
            <img src="~/static/select-user-type/imgae1.png" class="absolute left-3" width="25">
          </div>
          <div class="mx-4">
            <p class="text-xl font-bold text-white">
              Personal
            </p>
            <p class="text-sm text-white">
              $8/month
            </p>
          </div>
        </div>
        <div class="flex items-center p-4 my-3 w-full bg-white border-4 border-black">
          <div class="relative w-16 h-16 bg-[#04CCFF] rounded-full border-4 border-black">
            <img src="~/static/select-user-type/image3.png" class="absolute left-0" width="50">
          </div>
          <div class="mx-4">
            <p class="text-xl font-bold text-black">
              Family
            </p>
            <p class="text-sm text-black">
              $15/month<br>Add up to <br>5 family members.
            </p>
          </div>
        </div>
        <div class="flex items-center p-4 my-3 w-full bg-white border-4 border-black">
          <div class="relative w-16 h-16 bg-[#8906FF] rounded-full border-4 border-black">
            <img src="~/static/select-user-type/image2.png" class="absolute left-3" width="25">
          </div>
          <div class="mx-4">
            <p class="text-xl font-bold text-black">
              Student
            </p>
            <p class="text-sm text-black">
              $6/month
            </p>
          </div>
        </div>
        <p class="text-sm text-center">
          You can cancel anytime.To know more about out plan, visit here.
        </p>
        <button class="py-2 my-2 w-full text-white bg-black">
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>
