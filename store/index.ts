import {defineStore} from 'pinia';

export const userStore = defineStore('user', {
    state() {
        return {
            showLogin: false,
            isLogin: false
        };
    },
    actions: {}
});

export const globalStore = defineStore('global', {
    state: () => ({
        cdn_url: import.meta.env.VITE_CDN_URL,
    })
});

export const deviceStore = defineStore('device', {
    state: () => ({
        device: '',
    }),
    actions: {
        changeDevice(device: string) {
            this.device = device
        }
    }
});

export const routeStore = defineStore('route', {
    state: () => ({
        name: '',
    }),
    actions: {
        changeName(name: string) {
            this.name = name
        }
    }
});
