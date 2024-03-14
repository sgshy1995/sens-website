import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
    if (process.client) {

        ;(function(win, lib) {
            let doc = win.document;
            let docEl = doc.documentElement;
            let metaEl = doc.querySelector('meta[name="viewport"]');
            let flexibleEl = doc.querySelector('meta[name="flexible"]');
            let dpr = 0;
            let scale = 0;
            //@ts-ignore
            let tid;
            let flexible = lib.flexible || (lib.flexible = {});

            if (metaEl) {
                console.warn('将根据已有的meta标签来设置缩放比例');
                //@ts-ignore
                let match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
                if (match) {
                    scale = parseFloat(match[1]);
                    //@ts-ignore
                    dpr = parseInt(1 / scale);
                }
            } else if (flexibleEl) {
                let content = flexibleEl.getAttribute('content');
                if (content) {
                    let initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
                    let maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
                    if (initialDpr) {
                        dpr = parseFloat(initialDpr[1]);
                        scale = parseFloat((1 / dpr).toFixed(2));
                    }
                    if (maximumDpr) {
                        dpr = parseFloat(maximumDpr[1]);
                        scale = parseFloat((1 / dpr).toFixed(2));
                    }
                }
            }

            if (!dpr && !scale) {
                let isAndroid = win.navigator.appVersion.match(/android/gi);
                let isIPhone = win.navigator.appVersion.match(/iphone/gi);
                let devicePixelRatio = win.devicePixelRatio;
                if (isIPhone) {
                    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
                    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                        dpr = 3;
                    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                        dpr = 2;
                    } else {
                        dpr = 1;
                    }
                } else {
                    // 其他设备下，仍旧使用1倍的方案
                    dpr = 1;
                }
                scale = 1 / dpr;
            }

            //@ts-ignore
            docEl.setAttribute('data-dpr', dpr);
            if (!metaEl) {
                metaEl = doc.createElement('meta');
                metaEl.setAttribute('name', 'viewport');
                metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
                if (docEl.firstElementChild) {
                    docEl.firstElementChild.appendChild(metaEl);
                } else {
                    let wrap = doc.createElement('div');
                    wrap.appendChild(metaEl);
                    doc.write(wrap.innerHTML);
                }
            }

            function refreshRem(){
                let width = docEl.getBoundingClientRect().width;
                if (width / dpr > 540) {
                    width = width * dpr;
                }
                console.log(width)
                const device = sessionStorage.getItem('BL_WEBSITE_DEVICE') || 'pc'
                let rem = device === 'mobile' ? (width / 10 * 1920 / 780) : width / 10;
                docEl.style.fontSize = rem + 'px';
                //@ts-ignore
                flexible.rem = win.rem = rem;
            }

            const interval = setInterval(refreshRem, 100)
            const timeout = setTimeout(() => {
                refreshRem()
                clearInterval(interval)
            }, 1000)
            win.addEventListener('resize', function() {
                //@ts-ignore
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }, false);
            win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                    //@ts-ignore
                    clearTimeout(tid);
                    tid = setTimeout(refreshRem, 300);
                }
            }, false);

            if (doc.readyState === 'complete') {
                doc.body.style.fontSize = 12 * dpr + 'px';
            } else {
                doc.addEventListener('DOMContentLoaded', function(e) {
                    doc.body.style.fontSize = 12 * dpr + 'px';
                }, false);
            }


            refreshRem();

            //@ts-ignore
            flexible.dpr = win.dpr = dpr;
            flexible.refreshRem = refreshRem;
            docEl.style.visibility = 'visible';
            //@ts-ignore
            flexible.rem2px = function(d) {
                let val = parseFloat(d) * this.rem;
                if (typeof d === 'string' && d.match(/rem$/)) {
                    //@ts-ignore
                    val += 'px';
                }
                return val;
            }
            //@ts-ignore
            flexible.px2rem = function(d) {
                let val = parseFloat(d) / this.rem;
                if (typeof d === 'string' && d.match(/px$/)) {
                    //@ts-ignore
                    val += 'rem';
                }
                return val;
            }
        //@ts-ignore
        })(window, window['lib'] || (window['lib'] = {}));

    }
})
