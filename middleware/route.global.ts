import {NuxtSSRContext} from 'nuxt/app';
import { routeStore } from '~/store/index';
export default function(context: NuxtSSRContext) {
    const routeStoreUse = routeStore();
    routeStoreUse.changeName(context.name);
}
