<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex justify-between mx-10">
      <div class="flex space-x-2">
        <p class="font-bold text-lg">Notification</p>
        <div
          class="rounded-sm h-6 w-6 bg-primary-blue text-white text-center font-bold"
        >
          3
        </div>
      </div>
      <div><button class="text-primary-blue" @click="markAsRead()">Mark all as read</button></div>
    </div>
  </header>
  <main>
    <div v-for="notification in notifications " :key="notification">
      <div class="mx-10">
        <div
          class="flex space-x-4 h-16 w-full rounded-sm bg-neutral-Vlight-grayish-blue my-4 px-4 py-3"
          v-if="notification.read"
        >
          <div class="rounded-full w-10 h-10 bg-neutral-Grayish-blue"></div>
          <div class="flex space-x-2 items-center">
            <p class="font-bold">
              {{ notification.name }}
            </p>
            <p class="text-neutral-Grayish-blue font-normal">
              {{ notification.action }}
            </p>
            <p class="text-primary-blue font-bold">{{ notification.group }}</p>
            
            <div class="rounded-full bg-primary-red w-2 h-2" v-if="notification.read"></div>
          </div>
        </div>
      </div>
      <div class="mx-10">
        <div
          class="flex space-x-4 h-16 w-full my-4 px-4 py-3"
          v-if="!notification.read"
        >
          <div class="rounded-full w-10 h-10 bg-neutral-Grayish-blue"></div>
          <div class="flex space-x-2 items-center">
            <p class="font-bold">
              {{ notification.name }}
            </p>
            <p class="text-neutral-Grayish-blue font-normal">
              {{ notification.action }}
            </p>
            <p class="text-primary-blue font-bold">{{ notification.group }}</p>
            
            <div class="rounded-full bg-primary-red w-2 h-2" v-if="notification.read"></div>
          </div>
        </div>
      </div>
      <div v-if="notification.sendMsg" class="bg-neutral-Light-grayish-blue-1 ml-28 mr-10  rounded-md ">
      <p class="px-4 p-4">{{ notification.message }}</p>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useStore, state } from "../stores/notification.ts";
import { computed } from "vue";
const store = useStore();
const notifications = computed(() => store.getNotification);
const description = computed(
  () =>
    store.state.notifications.name +
    " " +
    store.state.notifications.action +
    " " +
    store.state.notifications.group
);
function markAsRead(){
  console.log(true)

  // return store.state.notification.read=true;
}
</script>
