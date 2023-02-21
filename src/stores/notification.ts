import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
interface State {
	notificationList: Notification[];
	read: false;
}

export const useStore = defineStore('notificationList', {
	state: (): State => {
		return {
			notificationList: [
				{
					id: 1,
					name: 'Mark Webber',
					description: '',
					action: 'reacted to your recent post',
					group: 'My first tournament today',
					read: false,
					message: '',
					photo: 'avatar-mark-webber.webp',
					commented: false,
					commentedPic: '',
					sendMsg: false,
					date: '1m'
				},
				{
					id: 2,
					name: 'Angela Gray',
					description: '',
					action: 'followed you',
					group: '',
					read: false,
					message: '',
					photo: 'avatar-angela-gray.webp',
					commented: false,
					commentedPic: '',
					sendMsg: false,
					date: '5m'
				},
				{
					id: 3,
					name: 'Jacob Thompson',
					description: '',
					action: 'has joined your group',
					group: 'chess group',
					read: false,
					message: '',
					photo: 'avatar-jacob-thompson.webp',
					commented: false,
					commentedPic: '',
					sendMsg: false,
					date: '1 day'
				},
				{
					id: 4,
					name: 'Rizky Hasanuddin',
					description: '',
					action: 'sent you a private message',
					group: '',
					read: true,
					sendMsg: true,
					message:
						"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i am already having a lot of fun and improving my game.",
					photo: 'avatar-rizky-hasanuddin.webp',
					commented: false,
					commentedPic: '',
					date: '5 days'
				},
				{
					id: 5,
					name: 'Kimberly Smith',
					description: '',
					action: 'commented on your picture',
					group: '',
					read: true,
					sendMsg: false,
					message: '',
					photo: 'avatar-kimberly-smith.webp',
					commented: true,
					commentedPic:
						'<img src="src/assets/images/image-chess.webp" alt="commented-picture" class="h-full w-full mt-4">',
					date: '1 week'
				},
				{
					id: 6,
					name: 'nathan Peterson',
					description: '',
					action: 'reacted to your recent post',
					group: '',
					read: true,
					sendMsg: false,
					message: '',
					photo: 'avatar-nathan-peterson.webp',
					commented: false,
					commentedPic: '',
					date: '2 weeks'
				},
				{
					id: 7,
					name: 'Anna Kim',
					description: '',
					action: 'left the group',
					group: 'chess group',
					read: true,
					sendMsg: false,
					message: '',
					photo: 'avatar-anna-kim.webp',
					commented: false,
					commentedPic: '',
					date: '2 weeks'
				}
			],
			read: false
		};
	},
	getters: {
		getNotification: (state) => state.notificationList,
		uread(state): number {
			return state.notificationList.filter((el) => {
				return el.read === false;
			}).length;
		}
	},
	actions: {
		markAllAsRead() {
			for (let i = 0; i < this.notificationList.length; i++) {
				this.notificationList[i].read = true;
			}
		}
	}
});

interface Notification {
	id: number;
	name: string;
	read: boolean;
	date: string;
	description: string;
	action: string;
	group: string;
	message: string;
	sendMsg: boolean;
	photo: string;
	commented: boolean;
	commentedPic: string;
}
