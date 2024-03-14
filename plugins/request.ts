import {defineNuxtPlugin, useCookie, useRuntimeConfig} from 'nuxt/app';

import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? process.env.APP_DEVELOPMENT_BASE_URL : process.env.APP_PRODUCTION_BASE_URL

let service = axios.create({
  baseURL, //域名信息-测试
  timeout: 360000
})

// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(resp => {
  if (resp.data) {
    return resp.data
  } else {
    return resp
  }
}, error => {

  const lang = localStorage.getItem('lang')

  if (error.response) {
    console.log("error total", error.response)
    if (error.response.status === 500) {

    }
    if (error.response && error.response.data && error.response.data.message) {

    }
  }else {

  }
})


export default defineNuxtPlugin(({ vueApp }) => {
  // 这里设置了默认启动时从cookie获取语言配置。至于为什么是cookie ，是因为nuxt 的首屏服务端加载原因
  // 注入到 Vue 实例中
  vueApp.config.globalProperties.$axios = service;
  vueApp.provide('axios', service)
})
