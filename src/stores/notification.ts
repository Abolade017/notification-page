import { ref, computed } from "vue";
import { defineStore } from "pinia";
interface Notification {
  id: number;
  name: string;
  read: false;
  markAllAsRead: false;
  date: string;
  description: string;
  action: string;
  group: string;
}

export const useStore = defineStore("notification", {
  state: () => ({
    notification:[
      {
        id: 1,
        name: "Mark Webber",
        description: "",
        action: "reacted to your recent post",
        group: "My first tournament today",
        read:true
      },
      {
        id: 2,
        name: "Angela Gray",
        description: "",
        action: "followed you",
        group: "",
        read:true
      },
      {
        id: 3,
        name: "Jacob Thompson",
        description: "",
        action: "has joined your group",
        group: "chess group",
        read:true
      },
      {
        id: 4,
        name: "Rizty Hasanuddin",
        description: "",
        action: "sent you a private message",
        group: "",
        read:false
      },
      {
        id: 5,
        name: "Kimberly Smith",
        description: "",
        action: "commented on your picture",
        group: "",
        read:false
      },
      {
        id: 6,
        name: "nathan Peterson",
        description: "",
        action: "reacted to your recent post",
        group: "",
        read:false
      },
      {
        id: 7,
        name: "Anna Kim",
        description: "",
        action: "left the group",
        group: "chess group",
        read:false
      },
    ] as Notification,
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
