<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex justify-between mx-10">
      <div class="flex space-x-2">
        <p class="font-bold text-lg">Notification</p>
        <div class="rounded-md h-6 w-6 bg-primary-blue text-white text-center font-bold">
          {{ unreadNotifications.length }}
        </div>
      </div>
      <div>
        <button class="text-primary-blue" @click="store.markAllAsRead()">
          Mark all as read
        </button>
      </div>
    </div>
  </header>
  <main>
    <div v-for="notification in notifications" :key="notification">
      <div class="mx-10">
        <div class="flex space-x-4 h-16 w-full rounded-sm bg-neutral-Vlight-grayish-blue my-4 px-4 py-3"
          v-if="!notification.read" @click="notification.read = true">
          <div class="w-10 h-10">
            <img :src="`src/assets/images/${notification.photo}`" alt="" class="w-full h-full">
          </div>
          <div class="flex flex-col">
          <div class="flex space-x-2 items-center">
            <p class="font-bold hover:text-primary-blue hover:font-bold cursor-pointer">
              {{ notification.name }}
            </p>
            <p class="text-neutral-Grayish-blue font-normal">
              {{ notification.action }}
            </p>
            <p class="hover:text-primary-blue hover:font-bold font-bold cursor-pointer">{{ notification.group }}</p>

            <div class="rounded-full bg-primary-red w-2 h-2" v-if="!notification.read"></div>
          </div>
          <div class="text-neutral-Grayish-blue">{{ notification.date }}</div>
        </div>
        </div>
      </div>
      <div class="mx-10 my-4" v-if="notification.read">
        <div class="flex">
          <div class="flex space-x-4 h-16 w-full  px-4 py-3" >
            <div class=" h-10 w-10">
              <img :src="`src/assets/images/${notification.photo}`" alt="user_image" class="w-full h-full">
            </div>
            <div class="flex flex-col">
            <div class="flex space-x-2">
              <p class="font-bold">
                {{ notification.name }}
              </p>
              <p class="text-neutral-Grayish-blue font-normal">
                {{ notification.action }}
              </p>
              <p class="hover:text-primary-blue hover:font-bold text-neutral-Grayish-blue  font-bold cursor-pointer">{{
                notification.group }}</p>
            </div>
            <div class="text-neutral-Grayish-blue">{{ notification.date }}</div>
            </div>
          </div>
          <div class="h-10 w-10 " v-if="notification.commented = true" v-html="notification.commentedPic"></div>
        </div>
      </div>
      <div v-if="notification.sendMsg" class="bg-neutral-Light-grayish-blue-1 ml-28 mr-10 rounded-md cursor-pointer">
        <p class="px-4 p-4">{{ notification.message }}</p>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">

import { useStore, actions } from "@/stores/notification.ts";
import { computed } from "vue";
const store = useStore();

const notifications = computed(() => store.getNotification);

const unreadNotifications = computed(() => {
  return notifications.value.filter((n) => n.read == false);
});

const unreadLength = store.getNotification.filter(function (el) {
  return el.read === false;
}).length;

</script>

