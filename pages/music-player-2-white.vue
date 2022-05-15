<template>
  <div class="flex justify-center items-center w-screen h-screen bg-gray-200">
    <div class="overflow-hidden w-[300px] h-[649px] font-dohyeon bg-white rounded-lg">
      <div class="my-6 text-black">
        <p class="text-center">
          savage
        </p>
        <div class="flex justify-center items-center">
          <div class="flex relative justify-center items-center w-[270px] h-[270px] rounded-full border border-black">
            <img src="~/static/music-player-2/aespa.jpeg" class="absolute -z-10 w-[250px] h-[250px] rounded-full">
            <div class="flex absolute z-10 justify-center items-center w-[60px] h-[60px] bg-white rounded-full">
              <div class="flex justify-center items-center w-[45px] h-[45px] bg-white rounded-full border border-black" />
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mx-8 mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="text-black fill-current" width="24" height="24"><g data-name="Layer 5"><path d="M2,10H6.1a6,6,0,0,1,4.24,1.76l2.83,2.83a1,1,0,0,0,1.41-1.41l-2.83-2.83A8.05,8.05,0,0,0,6.1,8H2a1,1,0,0,0,0,2Z" /><path d="M25.9,10h1.69l-1.12,1.12a1,1,0,1,0,1.41,1.41l2.83-2.83a1,1,0,0,0,0-1.42L27.88,5.46a1,1,0,0,0-1.41,1.41L27.59,8H25.9a8,8,0,0,0-5.66,2.34l-9.9,9.9A6,6,0,0,1,6.1,22H2a1,1,0,0,0,0,2H6.1a8,8,0,0,0,5.66-2.34l9.9-9.9A6,6,0,0,1,25.9,10Z" /><path d="M30.92,22.62a1,1,0,0,0-.22-.33l-2.83-2.83a1,1,0,0,0-1.41,1.41L27.59,22H25.9a6,6,0,0,1-4.24-1.76l-2.83-2.83a1,1,0,0,0-1.41,1.41l2.83,2.83A8.05,8.05,0,0,0,25.9,24h1.69l-1.12,1.12a1,1,0,1,0,1.41,1.41l2.83-2.83a1,1,0,0,0,.22-1.09Z" /></g></svg>
          <div class="text-center">
            <p class="text-5xl">
              자각몽
            </p>
            <p class="text-sm">
              aespa
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-black fill-current" width="24" height="24" viewBox="0 0 48 48"><path d="M19.828 40l2.586 2.586a2 2 0 0 1-2.828 2.828l-6-6a2 2 0 0 1 0-2.828l6-6a2 2 0 0 1 2.828 2.828L19.828 36h10.167C36.622 36 42 30.625 42 24c0-3.05-.875-5.727-2.536-7.72a2 2 0 1 1 3.072-2.56C44.827 16.466 46 20.054 46 24c0 8.835-7.17 16-16.005 16H19.828zm8.344-32l-2.586-2.586a2 2 0 0 1 2.828-2.828l6 6a2 2 0 0 1 0 2.828l-6 6a2 2 0 0 1-2.828-2.828L28.172 12H18.005C11.378 12 6 17.375 6 24c0 3.05.875 5.727 2.536 7.72a2 2 0 0 1-3.072 2.56C3.173 31.534 2 27.946 2 24 2 15.165 9.17 8 18.005 8h10.167z" /></svg>
        </div>
        <div class="px-2 pt-16">
          <div class="relative w-full h-[2px] bg-black">
            <div class="absolute -bottom-2 left-12">
              <p class="text-xs text-center">
                0:30
              </p>
              <div class="w-4 h-4 rounded-full border-2 border-black" />
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mx-8 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path
            d="M 3 3 L 3 3.5 L 3 12.5 L 3 13 L 4 13 L 4 12.5 L 4 8.7480469 L 7.1757812 11.863281 A 0.50005 0.50005 0 0 0 8.0273438 11.505859 L 8.0273438 8.1367188 A 0.50005089 0.50005089 0 0 0 8.1738281 8.3710938 L 12.136719 11.908203 A 0.50005089 0.50005089 0 0 0 12.96875 11.535156 L 12.96875 4.4609375 A 0.50005089 0.50005089 0 0 0 12.455078 3.9609375 A 0.50005089 0.50005089 0 0 0 12.136719 4.0878906 C 10.815626 5.2668906 9.4948903 6.446 8.1738281 7.625 A 0.50005089 0.50005089 0 0 0 8.0273438 7.8574219 L 8.0273438 4.4941406 A 0.50005 0.50005 0 0 0 7.5117188 3.9960938 A 0.50005 0.50005 0 0 0 7.1757812 4.1386719 C 6.1170536 5.177122 5.0586735 6.2154388 4 7.2539062 L 4 3.5 L 4 3 L 3 3 z M 11.96875 5.578125 L 11.96875 10.417969 L 9.2578125 7.9980469 C 10.161581 7.1914469 11.064979 6.384625 11.96875 5.578125 z M 7.0273438 5.6855469 L 7.0273438 10.316406 L 4.6660156 8.0019531 C 5.4532368 7.2298531 6.2401029 6.4576469 7.0273438 5.6855469 z "
            class="text-black fill-current"
            font-family="sans-serif"
            font-weight="400"
            overflow="visible"
            style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal;marker:none"
          /></svg>
          <img src="~/static/music-player-2/play-black.png" width="50" height="50">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16" class="text-black fill-current"><path
            style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal;marker:none"
            d="m 10.96875,1039.3622 0,0.5 0,9 0,0.5 -0.9999999,0 0,-0.5 0,-3.752 -3.1757812,3.1153 a 0.50005,0.50005 0 0 1 -0.8515626,-0.3574 l 0,-3.3692 a 0.50005089,0.50005089 0 0 1 -0.1464843,0.2344 l -3.9628909,3.5371 a 0.50005089,0.50005089 0 0 1 -0.832031,-0.373 l 0,-7.0743 a 0.50005089,0.50005089 0 0 1 0.513672,-0.5 0.50005089,0.50005089 0 0 1 0.318359,0.127 c 1.321093,1.179 2.6418287,2.3581 3.9628909,3.5371 a 0.50005089,0.50005089 0 0 1 0.1464843,0.2324 l 0,-3.3633 a 0.50005,0.50005 0 0 1 0.515625,-0.498 0.50005,0.50005 0 0 1 0.3359376,0.1426 c 1.0587276,1.0384 2.1171077,2.0767 3.1757812,3.1152 l 0,-3.7539 0,-0.5 0.9999999,0 z m -8.9687499,2.5781 0,4.8399 2.7109375,-2.42 c -0.9037685,-0.8066 -1.8071665,-1.6134 -2.7109375,-2.4199 z m 4.9414062,0.1074 0,4.6309 2.3613282,-2.3144 c -0.7872212,-0.7721 -1.5740873,-1.5444 -2.3613282,-2.3165 z"
            color="#000"
            font-family="sans-serif"
            font-weight="400"
            overflow="visible"
            transform="translate(2 -1036.362)"
          /></svg>
        </div>
      </div>
    </div>
  </div>
</template>
