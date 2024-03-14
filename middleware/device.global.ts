import { deviceType } from "~/utils/deviceType";
import {NuxtSSRContext} from 'nuxt/app';
export default function(context: NuxtSSRContext) {
    console.log('context', context)
    context.userAgent = (process.server && context.req && context.req.headers)
        ? context.req.headers["user-agent"]
        : context.userAgent;
    context.deviceType = deviceType(context.userAgent);
    const isHasM = context.deviceType.type.indexOf("mobile") != -1
    if(process.client){//客户端←这个判断贼重要
        const ifHasMobile = deviceType(navigator.userAgent)
        if (ifHasMobile.type === "pc") {//设备为pc
            console.log('设备：pc；路由：pc；跳转：pc')
            sessionStorage.setItem('BL_WEBSITE_DEVICE', 'pc')
            //return context.redirect(302,{path:routes});
            //return context.app.router.push({path:routes})   ←这样写会出现问题，具体原因不清楚
        }else{//当前为移动端
            console.log('设备：手机；路由：移动端；跳转：移动端')
            sessionStorage.setItem('BL_WEBSITE_DEVICE', 'mobile')
            return
        }
    }
}
