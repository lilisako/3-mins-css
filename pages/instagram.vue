<template>
  <div>
    <!-- header -->
    <div class="flex justify-between items-center py-4 px-8 border-b">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png">
      <div>
        <div class="flex justify-start items-center p-4 mx-2 w-80 h-10 bg-gray-200 rounded-lg">
          <div class="flex items-center">
            <svg
              aria-label="検索"
              class="mx-2 text-gray-500 fill-current"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            ><path
              d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            /><line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            /></svg>
            <p class="text-gray-500">
              検索
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <svg
          aria-label="ホーム"
          class="mx-2"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" /></svg>
        <svg
          aria-label="Direct"
          class="mx-2"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        /><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2" /></svg>
        <svg
          aria-label="新規投稿"
          class="mx-2"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><path
          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /><line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="6.545"
          x2="17.455"
          y1="12.001"
          y2="12.001"
        /><line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="12.003"
          x2="12.003"
          y1="6.545"
          y2="17.455"
        /></svg>
        <svg
          aria-label="友達を検索"
          class="mx-2"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><polygon
          fill="none"
          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056" /><circle
          cx="12.001"
          cy="12.005"
          fill="none"
          r="10.5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /></svg>
        <svg
          aria-label="アクティビティーフィード"
          class="mx-2"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" /></svg>
        <img class="mx-2 rounded-full" width="24" height="24" src="https://yt3.ggpht.com/bvsG8DABH27qOOV515j9MeJLpeLaQN08PAkTTeoz5uzKvgwjBeTm5PkbjVnkNYgUMQsyTXdPH-s=s88-c-k-c0x00ffffff-no-rj-mo">
      </div>
    </div>
    <!-- header -->
    <div class="flex items-center p-8">
      <!-- profile -->
      <div class="flex items-start pl-8">
        <img src="https://user-images.githubusercontent.com/33516104/157849441-5baa09ee-94b8-4fee-8684-dc4f4a2a13a9.png" class="mx-20 rounded-full ring-4 ring-pink-700 ring-offset-4" width="150" height="150">
        <div>
          <div class="flex items-center">
            <h2 class="text-3xl">
              bts.bighitofficial
            </h2>
            <button class="py-1 px-4 mx-2 font-bold text-white bg-[#3895F6] rounded-sm">
              フォローする
            </button>
            <div class="flex justify-center items-center mx-1 w-8 h-8 bg-[#3895F6] rounded-sm">
              <svg
                aria-label="下向きシェブロンアイコン"
                class="_8-yf5 "
                color="#ffffff"
                fill="#ffffff"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              ><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z" /></svg>
            </div>
          </div>
          <div class="flex items-center my-6">
            <p class="rx-2">
              投稿<span class="font-bold">975件</span>
            </p>
            <p class="mx-2">
              フォロワー<span class="font-bold">6077万</span>人
            </p>
            <p class="mx-2">
              フォロー中<span class="font-bold">10</span>人
            </p>
          </div>
          <div>
            <p class="font-bold">
              BTS official
            </p>
            <p><span class="text-blue-900">#방탄소년단</span> 공식 인스타그램입니다.</p>
            <p>This is the official Instagram for <span class="text-blue-900">#BTS</span></p>
            <p class="font-bold text-blue-900">
              ibighit.com/bts
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- stories -->
    <div class="flex pl-12">
      <div class="mx-6">
        <img src="https://user-images.githubusercontent.com/33516104/157852470-e0fce2a5-8af7-460d-8cac-e432d41d2525.png" class="w-20 h-20 rounded-full ring-2 ring-gray-200 ring-offset-2">
        <p class="pt-2 font-bold text-center">
          Butter 💿
        </p>
      </div>
      <div class="mx-6">
        <img src="https://user-images.githubusercontent.com/33516104/157852544-3c371ebe-47b2-4147-bf45-869d1f3fb98e.png" class="w-20 h-20 rounded-full ring-2 ring-gray-200 ring-offset-2">
        <p class="pt-2 font-bold text-center">
          Butter🧈
        </p>
      </div>
      <div class="mx-6">
        <img src="https://user-images.githubusercontent.com/33516104/157852589-ecf23110-06a8-452b-905c-a1fdeb3d1036.png" class="w-20 h-20 rounded-full ring-2 ring-gray-200 ring-offset-2">
        <p class="pt-2 font-bold text-center">
          BE
        </p>
      </div>
    </div>
    <!-- posts -->
    <div class="my-12 mx-2 border-t">
      <div class="grid grid-cols-4 mx-48">
        <div class="flex justify-center items-center pt-4 border-t border-black">
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          ><rect
            fill="none"
            height="18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="18"
            x="3"
            y="3"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="9.015"
            x2="9.015"
            y1="3"
            y2="21"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="14.985"
            x2="14.985"
            y1="3"
            y2="21"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="9.015"
            y2="9.015"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="14.985"
            y2="14.985"
          /></svg>
          <p class="mx-2 text-sm font-bold">
            投稿
          </p>
        </div>
        <div class="flex justify-center items-center pt-4 ">
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          ><line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="2.049"
            x2="21.95"
            y1="7.002"
            y2="7.002"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="13.504"
            x2="16.362"
            y1="2.001"
            y2="7.002"
          /><line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="7.207"
            x2="10.002"
            y1="2.11"
            y2="7.002"
          /><path
            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /><path d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z" fill-rule="evenodd" /></svg>
          <p class="mx-2 text-sm font-bold text-gray-600">
            リール
          </p>
        </div>
        <div class="flex justify-center items-center pt-4 ">
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          ><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z" /></svg>
          <p class="mx-2 text-sm font-bold text-gray-600">
            動画
          </p>
        </div>
        <div class="flex justify-center items-center pt-4 ">
          <svg
            aria-label=""
            class="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          ><path
            d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /><path
            d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /><circle
            cx="12.072"
            cy="11.075"
            fill="none"
            r="3.556"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
          <p class="mx-2 text-sm font-bold text-gray-600">
            タグづけされている人
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-3 gap-4 px-8">
        <div class="relative">
          <img src="https://user-images.githubusercontent.com/33516104/157855201-b719f098-3dbf-426a-8d19-c168c12b4763.png">
          <svg
            aria-label="カルーセル"
            class="absolute top-2 right-2"
            color="#ffffff"
            fill="#ffffff"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          ><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z" /></svg>
        </div>
        <div class="relative">
          <svg
            aria-label="カルーセル"
            class="absolute top-2 right-2"
            color="#ffffff"
            fill="#ffffff"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          ><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z" /></svg>
          <img src="https://user-images.githubusercontent.com/33516104/157855227-56c0a5b9-c205-43a1-a9d9-89845a1d5d23.png">
        </div>
        <div class="relative">
          <svg
            aria-label="カルーセル"
            class="absolute top-2 right-2"
            color="#ffffff"
            fill="#ffffff"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          ><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z" /></svg>
          <img src="https://user-images.githubusercontent.com/33516104/157855270-d5890786-4412-4f92-9334-094c56adc564.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
