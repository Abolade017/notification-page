import { ref, computed } from "vue";
import { defineStore } from "pinia";
interface Notification {
  id: number;
  name: string;
  read: boolean;
  markAllAsRead: boolean;
  date: string;
  description: string;
  action: string;
  group: string;
  message: string;
  sendMsg:boolean
}

export const useStore = defineStore("notification", {
  state: () => ({
    notification: [
      {
        id: 1,
        name: "Mark Webber",
        description: "",
        action: "reacted to your recent post",
        group: "My first tournament today",
        read: true,
        message: "",
        sendMsg:false
      },
      {
        id: 2,
        name: "Angela Gray",
        description: "",
        action: "followed you",
        group: "",
        read: true,
        message: "",
        sendMsg:false
      },
      {
        id: 3,
        name: "Jacob Thompson",
        description: "",
        action: "has joined your group",
        group: "chess group",
        read: true,
        message: "",
        sendMsg:false
      },
      {
        id: 4,
        name: "Rizty Hasanuddin",
        description: "",
        action: "sent you a private message",
        group: "",
        read: false,
        sendMsg:true,
        message:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i am already having a lot of fun and improving my game.",
      },
      {
        id: 5,
        name: "Kimberly Smith",
        description: "",
        action: "commented on your picture",
        group: "",
        read: false,
        sendMsg:false,
        message: "",
      },
      {
        id: 6,
        name: "nathan Peterson",
        description: "",
        action: "reacted to your recent post",
        group: "",
        read: false,
        sendMsg:false,
        message: "",
      },
      {
        id: 7,
        name: "Anna Kim",
        description: "",
        action: "left the group",
        group: "chess group",
        read: false,
        sendMsg:false,
        message: "",
      },
    ],
  }),
  getters: {
    getNotification: (state) => state.notification,
  },
});

// // export const useNotificationStore = defineStore('nofifications', () => {
// //         state: () => ({
// //       return {
// //         notification: [
// //           {id:1, name:'Mark Webber',description:'', action:'reacted to your recent post', group:''},
// //           {id:2, name:'Angela Gray',description:'', action:'followed you', group:''},
// //           {id:3, name:'Jacob Thompson',description:'', action:'has joined your group', group:'chess group'},
// //           {id:4, name:'Rizty Hasanuddin',description:'', action:'sent you a private message', group:''},
// //           {id:5, name:'Kimberly Smith',description:'', action:'commented on your picture', group:''},
// //           {id:6, name:'nathan Peterson',description:'', action:'reacted to your recent post', group:''},
// //           {id:7, name:'Anna Kim',description:'', action:'left the group', group:'chess group'}
// //         ]
// //       }
// //     }),
//     getters:{
//       getNotification:(state)=>
//         state.Notification
//     }
//   }
//   ),
