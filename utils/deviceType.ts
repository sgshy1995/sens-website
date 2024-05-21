// 这里的判断类型是自己整理的,覆盖面只涵盖我工作领域的
// 可以按需追加

/**
 *
 * @param {*} UA ,就是userAgent
 * @returns  type: 设备类型
 *           env: 访问环境(微信/微博/qq)
 *           masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 */
function isWechat(UA: string) {
    return /MicroMessenger/i.test(UA);
}

function isWeibo(UA: string) {
    return /Weibo/i.test(UA);
}

function isQQ(UA: string) {
    return /QQ/i.test(UA);
}

function isMobile(UA: string) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

function isIOS(UA: string) {
    return /iPhone|iPad|iPod/i.test(UA);
}

function isAndroid(UA: string) {
    return /Android/i.test(UA);
}

export function deviceType(UA: string) {
    if (isMobile(UA)) {
        if (isIOS(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "mobile",
                    os: "ios",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "mobile",
                    os: "ios",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "mobile",
                    os: "ios",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "mobile",
                os: "ios",
            };
        }
        if (isAndroid(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "mobile",
                    os: "android",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "mobile",
                    os: "android",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "mobile",
                    os: "android",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "mobile",
                os: "android",
            };
        }

        return {
            type: "mobile",
        };
    } else {
        return {
            type: "pc",
        };
    }
}



