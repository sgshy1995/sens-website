import {useState} from 'nuxt/app';

const useUserInfo = () => {
    useState('userInfo', () => {
        return {
            id: '',
            username: ''
        }
    })
}


const useToken = () => {
    useState('token', () => {
        return ''
    })
}

const useEn = () => {
    useState('en', () => {
        return {
            'hello': 'hello'
        }
    })
}

const useZh = () => {
    useState('zh', () => {
        return {
            'hello': '你好'
        }
    })
}

export {
    useUserInfo,
    useToken,
    useEn,
    useZh
}
