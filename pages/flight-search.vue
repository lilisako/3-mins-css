<template>
  <div class="h-screen font-garamond tracking-tight">
    <!-- header -->
    <div class="py-3 bg-[#F9FFE8] border-b-4 border-black">
      <h1 class="text-4xl font-bold text-center">
        Flights Search
      </h1>
    </div>
    <!-- body -->
    <div class="flex">
      <div class="w-1/2 bg-[#E9FFA0] border-r-4 border-black">
        <div class="my-32">
          <div class="mx-3">
            <div class="flex items-center">
              <div class="flex justify-center items-center mx-3">
                <img src="~/static/flight-search/arrow.png" width="25">
                <p class="text-xl font-bold text-center">
                  Round Trip
                </p>
              </div>
              <div class="flex justify-center items-center mx-3">
                <img src="~/static/flight-search/Direction.png" width="25">
                <p class="text-xl font-bold text-center">
                  1
                </p>
              </div>
              <div class="flex justify-center items-center mx-3">
                <img src="~/static/flight-search/flight.png" width="25">
                <p class="text-xl font-bold text-center">
                  Economy
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black">
            <div class="p-2 w-1/2 border-r-4 border-black">
              <div class="flex justify-center items-center">
                <img src="~/static/flight-search/locationpin.png">
                <p class="text-2xl font-bold text-center">
                  Tokyo
                </p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="flex justify-center items-center">
                <img src="~/static/flight-search/locationpin.png">
                <p class="text-2xl font-bold text-center">
                  Where to?
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black">
            <div class="p-2 w-1/2 border-r-4 border-black">
              <div class="flex justify-center items-center">
                <img src="~/static/flight-search/Calendar.png" width="50">
                <p class="text-2xl font-bold text-center">
                  Tue, 3 May
                </p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="flex justify-center items-center">
                <img src="~/static/flight-search/Calendar.png" width="50">
                <p class="text-2xl font-bold text-center">
                  Tue, 5 May
                </p>
              </div>
            </div>
          </div>
          <div class="py-1 my-2 mx-4 text-center bg-black">
            <p class="py-2 text-3xl text-white">
              Search
            </p>
          </div>
        </div>
      </div>
      <div class="px-3 pt-12 w-1/2 bg-[#F5FFD3]">
        <p class="text-6xl font-bold">
          Life is a journey, <br>not a destination.
        </p>
        <p>To finish the moment, to find the journey’s end in every step of the road, to live the greatest number of good hours, is wisdom.</p>
        <img src="~/static/flight-search/beach.png">
      </div>
    </div>
  </div>
</template>
