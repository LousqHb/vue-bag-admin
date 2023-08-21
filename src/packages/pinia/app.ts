import {defineStore} from "pinia"
import config from "@/packages/config"

const paths = ["userSetting"], id = "app"
const appLoca = window.localStorage.getItem(id)
if (appLoca) {
    const {userSetting} = JSON.parse(appLoca)
    if (userSetting.lasting) {
        paths.push("tabs")
    }
}
const app = defineStore({
    id,
    persist: {
        storage: window.localStorage,
        paths,
    },
    // 持久化存储插件其他配置
    state: () => {
        return {
            browser: {},
            configOptions: config,
            collapsed: false,
            mobile: false,
            userSetting: { // 主题设置
                layoutName: "ml", // 主题名称
                themeColor: "#519a73", // 主题颜色
                themeName: null, // 主题模式 深色 和 白色
                language: "zhCN", // 语言
                tabsStyle: "sutra", // 标签风格
                hideTabs: false, // 隐藏标签
                lasting: false, // 标签持久化
                gray: false, // 灰色模式
                weak: false, // 色弱模式
                isFullscreen: false, // 全屏模式
                animation: "animate__slideInLeft", // 类型 参考animation.css
                disableAnimation: false, // 动画
                keepAlive: false // 是否缓存
            },
            userInfo: {},
            userState: false,
            allMenus: [], // 所有菜单
            treeMenus: [],
            paths: [],// 路由路径
            tabs: <any>[],// 标签
            currentRouter: {}
        }
    },
})

export default app
