import {createApp} from "vue"
import App from "./App.vue"
import install from "@/packages/install.ts"
import router from "@/app/admin/router"

createApp(App).use(install, {
    menus: [
        // {
        //     "id": 9000,
        //     "title": "首页",
        //     "icon": "Home",
        //     "path": "/home",
        //     "pid": 0,
        //     "file": "/view/home/index.vue",
        // }
    ],
    getViews: () => {
        return import.meta.glob("@/app/admin/view/**/*.vue", {eager: true})
    }
}).use(router).mount("#app")
