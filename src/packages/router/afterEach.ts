import {RouteLocationNormalized} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {getObjectPath} from "@/packages/utils/utils.ts"
import {cloneDeep} from "lodash"

let firstReload = true

/**
 * 更新当前路由
 * @param to
 */
function updateCurrentRouter(to) {
    const appStore = appPinia()
    appStore.currentRouter = {...to}
}

/**
 * 更新路由路径
 * @param to
 */
function updatePaths(to) {
    const appStore = appPinia()
    const paths = getObjectPath({arr: appStore.treeMenus, id: to.meta.id})
    appStore.paths = (paths && paths.reverse()) || []
}

/**
 * 更新标签
 * @param current
 */
function updateTbas(current) {
    const appStore = appPinia()
    const {href, hash, name, path, query, meta} = current
    const tag = appStore.tabs.find((item: any) => item.meta.id === meta.id)
    if (!tag) {
        appStore.tabs.push(cloneDeep({href, hash, name, path, query, meta}))
    }
}


/**
 * 初始化-更新标签
 */
function updateTbasFix() {
    const appStore = appPinia()
    if (firstReload) {
        appStore.allMenus.forEach((current: any) => {
            if (current.tabFix && current.path) {
                updateTbas({meta: current})
            }
        })
        firstReload = false
    }
}


const afterEach = (to: RouteLocationNormalized) => {
    updateCurrentRouter(to)
    updatePaths(to)
    updateTbas(to)
    updateTbasFix()
}

export default afterEach
