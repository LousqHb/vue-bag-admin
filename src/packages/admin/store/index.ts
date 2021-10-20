import {createStore} from 'vuex'
import {defaultMenu} from "@/packages/admin/config/defaultMenu";
import {find, remove} from '@/utils/lodash';

const defaultHome = {
    active: true,
    fullPath: '/',
    title: '首页'
}
const store = createStore({
    strict: true,
    state: {
        userinfo: {name: 1},
        token: '1',
        menuList: defaultMenu,
        processList: [defaultHome], // tab切换栏
        currentRouter: {}, // 当前路由数据
        tabViewsPath: [] // 访问路经
    },
    // 定义getters 好处可以过滤数据
    getters: {
        menuList: (state) => {
            return state.menuList;
        },
        processList: (state) => {
            return state.processList;
        },
        currentRouter: (state) => {
            return state.currentRouter;
        },
        tabViewsPath: (state) => {
            return state.tabViewsPath;
        },
        token: (state) => {
            return state.token;
        }
    },
    actions: {},
    mutations: {
        // 添加头部路由标签
        addProcessList(state: any, item: any) {
            if (!find({key: 'fullPath', value: item.fullPath}, state.processList)) {
                state.processList.push(item);
            }
        },
        // 使用splice元素
        delProcessList(state: any, idx: number) {
            state.processList.splice(idx, 1)
        },
        // 重置指定菜单
        setProcessList(state: any, arr: Array<any>) {
            state.processList = arr;
        },
        // 重置菜单
        resetProcessList(state: any) {
            state.list = [];
        },
        // 删除头部路由标签
        deleteProcessList(state: any, item: any) {
            state.processList = remove(item, state.processList)
        },
        // 选中的当前路由
        updateCurrentRouter(state: any, item: any) {
            // 激活当前的 processList 中的 active
            state.processList.map((obj: any) => {
                obj.active = obj.fullPath === item.fullPath;
            });
            state.currentRouter = item;
        },
        // 更新tab栏路由
        updateTabViewsPath(state: any, arr: Array<any>) {
            state.tabViewsPath = arr.reverse();
        }
    }
})

export default store;