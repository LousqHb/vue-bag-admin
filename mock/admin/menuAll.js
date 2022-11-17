import Mock from 'mockjs'

Mock.mock('/api/menu/all', 'post', () => {
    const data = [
        {
            "createTime": "2022/06/18 19:11:45",
            "updateTime": "2022/07/22 20:25:11",
            "id": 21,
            "user_id": 1,
            "meun_id": "MzS7kpeMswX2WCasxm-Rx",
            "name": "首页",
            "icon": "HomeOutlined",
            "shows": true,
            "path": "/home",
            "httpViewPath": "",
            "order": 100,
            "pid": 0,
            "type": null,
            "filePath": "/views/home/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": true,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 19:16:49",
            "updateTime": "2022/07/22 20:27:15",
            "id": 22,
            "user_id": 1,
            "meun_id": "fRCCxdLtSUMiMOsd8b1PJ",
            "name": "系统管理",
            "icon": "SettingOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 9,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": true,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:29:29",
            "updateTime": "2022/06/26 23:29:01",
            "id": 55,
            "user_id": 1,
            "meun_id": "NrxZfIv5W7DYidTIYsTjF",
            "name": "CMS管理",
            "icon": "GlobalOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 9,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:34:11",
            "updateTime": "2022/06/26 23:29:07",
            "id": 62,
            "user_id": 1,
            "meun_id": "2Sg8jIzzgqiOaXV7PT4iA",
            "name": "配置管理",
            "icon": "SettingOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 9,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 19:17:33",
            "updateTime": "2022/06/26 14:28:46",
            "id": 23,
            "user_id": 1,
            "meun_id": "RoRUNnl_JxTBoHf965wVC",
            "name": "部门组织",
            "icon": "NodeCollapseOutlined",
            "shows": true,
            "path": "/sys/branch",
            "httpViewPath": "",
            "order": 0,
            "pid": 22,
            "type": null,
            "filePath": "/views/sys/branch/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 19:18:41",
            "updateTime": "2022/06/26 14:29:02",
            "id": 24,
            "user_id": 1,
            "meun_id": "4f1HUt4vVO2O0Lzz5cYVp",
            "name": "角色管理",
            "icon": "UserSwitchOutlined",
            "shows": true,
            "path": "/sys/role",
            "httpViewPath": "",
            "order": 0,
            "pid": 22,
            "type": null,
            "filePath": "/views/sys/role/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 19:51:06",
            "updateTime": "2022/06/26 14:48:42",
            "id": 25,
            "user_id": 1,
            "meun_id": "s7AHh3JjP3nZtHlkuUG-0",
            "name": "用户管理",
            "icon": "UserAddOutlined",
            "shows": true,
            "path": "/sys/member",
            "httpViewPath": "",
            "order": 0,
            "pid": 22,
            "type": null,
            "filePath": "/views/sys/member/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 20:01:21",
            "updateTime": "2022/06/26 14:29:54",
            "id": 26,
            "user_id": 1,
            "meun_id": "6Q69YfKZDlOg7SufsnGP4",
            "name": "菜单列表",
            "icon": "ProfileOutlined",
            "shows": true,
            "path": "/sys/menu",
            "httpViewPath": "",
            "order": 0,
            "pid": 22,
            "type": null,
            "filePath": "/views/sys/menu/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:52:04",
            "updateTime": "2022/06/26 14:31:02",
            "id": 27,
            "user_id": 1,
            "meun_id": "yHqoWbviIRRVDV7v_fotX",
            "name": "组件库",
            "icon": "SendOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:54:49",
            "updateTime": "2022/06/26 14:31:19",
            "id": 28,
            "user_id": 1,
            "meun_id": "82OvenOASQeW0mYZDtThw",
            "name": "Markdown编辑器",
            "icon": "SnippetsOutlined",
            "shows": true,
            "path": "/module/markdown",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/markdown/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:55:09",
            "updateTime": "2022/06/26 14:31:39",
            "id": 29,
            "user_id": 1,
            "meun_id": "1KKAdieF5O83q08yGjpzk",
            "name": "富文本编辑器",
            "icon": "FontSizeOutlined",
            "shows": true,
            "path": "/module/rich",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/rich/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:55:45",
            "updateTime": "2022/06/26 14:32:12",
            "id": 30,
            "user_id": 1,
            "meun_id": "yfgaS7nCwrLAy1uFxofWz",
            "name": "解析Exel",
            "icon": "TableOutlined",
            "shows": true,
            "path": "/module/exel",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/exel/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:56:06",
            "updateTime": "2022/06/26 14:32:42",
            "id": 31,
            "user_id": 1,
            "meun_id": "Wz7OIJ55a_eo1Ds3nY2yw",
            "name": "上传",
            "icon": "FolderOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:56:35",
            "updateTime": "2022/06/26 14:44:18",
            "id": 32,
            "user_id": 1,
            "meun_id": "_y2xzDcx1B0yQQpeMnfCb",
            "name": "图片上传",
            "icon": "PictureOutlined",
            "shows": true,
            "path": "/module/fileUploadImg",
            "httpViewPath": "",
            "order": 0,
            "pid": 31,
            "type": null,
            "filePath": "/views/module/fileUpload/FileUploadImg.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:57:07",
            "updateTime": "2022/06/26 14:33:11",
            "id": 33,
            "user_id": 1,
            "meun_id": "aBNm1o1e5HhkSjODRt8If",
            "name": "文件上传",
            "icon": "FolderAddOutlined",
            "shows": true,
            "path": "/module/fileUpload",
            "httpViewPath": "",
            "order": 0,
            "pid": 31,
            "type": null,
            "filePath": "/views/module/fileUpload/FileUpload.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:57:30",
            "updateTime": "2022/06/26 14:47:39",
            "id": 34,
            "user_id": 1,
            "meun_id": "zotgrZKObXbKUpLiS4_jS",
            "name": "文件打印",
            "icon": "PrinterOutlined",
            "shows": true,
            "path": "/module/print",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/print/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:57:59",
            "updateTime": "2022/06/26 14:40:30",
            "id": 35,
            "user_id": 1,
            "meun_id": "OYfRTFnY0BdPogrxhC3rU",
            "name": "简洁图标",
            "icon": "MehOutlined",
            "shows": true,
            "path": "/module/icon/iconfont",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/icon/iconfont/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:58:28",
            "updateTime": "2022/06/26 14:40:46",
            "id": 36,
            "user_id": 1,
            "meun_id": "L2bykhKZqcN4z8Wfkztmt",
            "name": "描述列表",
            "icon": "OrderedListOutlined",
            "shows": true,
            "path": "/module/descriptions",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/descriptions/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:59:03",
            "updateTime": "2022/06/26 14:41:03",
            "id": 37,
            "user_id": 1,
            "meun_id": "t86SBsRQGDrlx_0Kwp2Tn",
            "name": "课程表",
            "icon": "FundOutlined",
            "shows": true,
            "path": "/module/course",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/course/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:59:26",
            "updateTime": "2022/06/26 14:41:13",
            "id": 38,
            "user_id": 1,
            "meun_id": "lY5xOxL9J_cwpk-OrKXEj",
            "name": "视频播放",
            "icon": "YoutubeOutlined",
            "shows": true,
            "path": "/module/media",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/media/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 22:59:58",
            "updateTime": "2022/06/26 14:42:00",
            "id": 39,
            "user_id": 1,
            "meun_id": "XWSTkR4_F8DU5JVy4bSEu",
            "name": "内容搜索",
            "icon": "ZoomInOutlined",
            "shows": true,
            "path": "/module/fuse",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/fuse/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:00:29",
            "updateTime": "2022/06/26 14:42:24",
            "id": 40,
            "user_id": 1,
            "meun_id": "ypkQqcf3oQWf_vkj1-pwb",
            "name": "导出文件",
            "icon": "ToTopOutlined",
            "shows": true,
            "path": "/module/fileSaver",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/fileSaver/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:01:01",
            "updateTime": "2022/06/26 17:28:23",
            "id": 41,
            "user_id": 1,
            "meun_id": "l-DYQ77HonRMiI5nKy1TN",
            "name": "表单生成器",
            "icon": "FieldBinaryOutlined",
            "shows": true,
            "path": "/iframe/form-generator",
            "httpViewPath": "",
            "order": 0,
            "pid": 27,
            "type": null,
            "filePath": "/views/module/iframe/Index.vue",
            "iframePath": "https://jakhuang.github.io/form-generator",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:02:07",
            "updateTime": "2022/06/26 15:02:57",
            "id": 42,
            "user_id": 1,
            "meun_id": "Rm-7mUOk010-BJ8JFJYTF",
            "name": "数据图表",
            "icon": "DotChartOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:02:29",
            "updateTime": "2022/06/26 14:43:19",
            "id": 43,
            "user_id": 1,
            "meun_id": "HJPq0AEKkqxXH21S4B9yk",
            "name": "G2",
            "icon": "AreaChartOutlined",
            "shows": true,
            "path": "/chart/g2",
            "httpViewPath": "",
            "order": 0,
            "pid": 42,
            "type": null,
            "filePath": "/views/chart/g2/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:02:52",
            "updateTime": "2022/06/26 14:43:27",
            "id": 44,
            "user_id": 1,
            "meun_id": "FJxqFnt23glISPfTyQoux",
            "name": "G2plot",
            "icon": "LineChartOutlined",
            "shows": true,
            "path": "/chart/g2plot",
            "httpViewPath": "",
            "order": 0,
            "pid": 42,
            "type": null,
            "filePath": "/views/chart/g2plot/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:03:13",
            "updateTime": "2022/06/26 14:44:45",
            "id": 45,
            "user_id": 1,
            "meun_id": "gslrSe6aC0c_4Ymz9Bc2K",
            "name": "开发文档",
            "icon": "DribbbleOutlined",
            "shows": true,
            "path": "",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:03:32",
            "updateTime": "2022/06/26 17:26:20",
            "id": 46,
            "user_id": 1,
            "meun_id": "BqzUw2Yjt9Yz-w7jAXeao",
            "name": "Vue3",
            "icon": "Html5Outlined",
            "shows": true,
            "path": "/iframe/Vue3",
            "httpViewPath": "",
            "order": 0,
            "pid": 45,
            "type": null,
            "filePath": "/views/module/iframe/Index.vue",
            "iframePath": "https://v3.cn.vuejs.org/guide/introduction.html",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:03:54",
            "updateTime": "2022/06/26 14:45:40",
            "id": 47,
            "user_id": 1,
            "meun_id": "j7yoJv2BCVlVKEV0bfDJM",
            "name": "通知页面",
            "icon": "AlertOutlined",
            "shows": true,
            "path": "/error",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/error/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:04:15",
            "updateTime": "2022/07/17 12:02:44",
            "id": 48,
            "user_id": 1,
            "meun_id": "RV7sEhlMRvgmuEWOamJZt",
            "name": "打点吧",
            "icon": "AlipayOutlined",
            "shows": true,
            "path": "/admin",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/admin/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": true,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:04:36",
            "updateTime": "2022/06/26 17:14:12",
            "id": 49,
            "user_id": 1,
            "meun_id": "yQgs7upitxSn8RkjnuENQ",
            "name": "权限控制",
            "icon": "TeamOutlined",
            "shows": false,
            "path": "/permit",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/permit/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": true,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:04:57",
            "updateTime": "2022/06/26 14:47:16",
            "id": 50,
            "user_id": 1,
            "meun_id": "rzwpfi6rVmnGH8ZpBQ8Yo",
            "name": "异步组件",
            "icon": "CodeOutlined",
            "shows": true,
            "path": "/async",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/async/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:05:16",
            "updateTime": "2022/06/26 14:47:26",
            "id": 51,
            "user_id": 1,
            "meun_id": "9Qg7zhh1exittxk5Mk8d7",
            "name": "关于",
            "icon": "UserOutlined",
            "shows": true,
            "path": "/about",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/about/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:05:49",
            "updateTime": "2022/06/18 23:05:49",
            "id": 52,
            "user_id": 1,
            "meun_id": "GjsiG1I300__F5Zf6zzqY",
            "name": "错误捕获",
            "icon": "WeiboOutlined",
            "shows": true,
            "path": "/module/debug",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/module/debug/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:06:20",
            "updateTime": "2022/06/18 23:06:20",
            "id": 53,
            "user_id": 1,
            "meun_id": "DWIqOYopW5NJRpcU0F7FG",
            "name": "403",
            "icon": "WeiboCircleOutlined",
            "shows": true,
            "path": "/403",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/error/403.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/18 23:06:42",
            "updateTime": "2022/06/18 23:06:42",
            "id": 54,
            "user_id": 1,
            "meun_id": "NA1MzTr7eyKM8DplHvJhL",
            "name": "500",
            "icon": "TwitterOutlined",
            "shows": true,
            "path": "/500",
            "httpViewPath": "",
            "order": 0,
            "pid": 0,
            "type": null,
            "filePath": "/views/error/500.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:30:14",
            "updateTime": "2022/06/26 22:30:14",
            "id": 56,
            "user_id": 1,
            "meun_id": "WSQwfJ7K4MIrSHxLKYiNR",
            "name": "栏目管理",
            "icon": "",
            "shows": true,
            "path": "/channel",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/channel/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:30:39",
            "updateTime": "2022/06/26 22:30:39",
            "id": 57,
            "user_id": 1,
            "meun_id": "t7d93hAyPR2iiKMiwDS0u",
            "name": "内容管理",
            "icon": "",
            "shows": true,
            "path": "/article",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/article/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:31:18",
            "updateTime": "2022/06/26 22:31:18",
            "id": 58,
            "user_id": 1,
            "meun_id": "on1xbjrRNMdR8-qOb_uRf",
            "name": "Bnaner管理",
            "icon": "",
            "shows": true,
            "path": "/banner",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/banner/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:31:46",
            "updateTime": "2022/06/26 22:31:46",
            "id": 59,
            "user_id": 1,
            "meun_id": "9b1M0Uu-aTdZK6odd6rND",
            "name": "友情链接",
            "icon": "",
            "shows": true,
            "path": "/links",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/links/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:32:05",
            "updateTime": "2022/06/26 22:32:05",
            "id": 60,
            "user_id": 1,
            "meun_id": "9XN794gqiml-PgBMJGftq",
            "name": "关键词管理",
            "icon": "",
            "shows": true,
            "path": "/antistop",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/antistop/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:32:25",
            "updateTime": "2022/06/26 22:32:25",
            "id": 61,
            "user_id": 1,
            "meun_id": "REjF846SNFb9_F53Z3p3p",
            "name": "下载管理",
            "icon": "",
            "shows": true,
            "path": "/download",
            "httpViewPath": "",
            "order": 0,
            "pid": 55,
            "type": null,
            "filePath": "/admin/views/download/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:34:50",
            "updateTime": "2022/06/26 22:34:50",
            "id": 63,
            "user_id": 1,
            "meun_id": "_Xa4BPlyrrnLgF3kNkVMe",
            "name": "网站配置",
            "icon": "IeOutlined",
            "shows": true,
            "path": "/website",
            "httpViewPath": "",
            "order": 0,
            "pid": 62,
            "type": null,
            "filePath": "/admin/views/website/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/26 22:35:33",
            "updateTime": "2022/06/26 22:35:33",
            "id": 64,
            "user_id": 1,
            "meun_id": "pCnVMqhe1j3_4MugjHLfs",
            "name": "留言管理",
            "icon": "FormOutlined",
            "shows": true,
            "path": "/leave",
            "httpViewPath": "",
            "order": 0,
            "pid": 62,
            "type": null,
            "filePath": "/admin/views/leave/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/30 23:36:41",
            "updateTime": "2022/06/30 23:36:41",
            "id": 66,
            "user_id": 1,
            "meun_id": "sJnWiXkoLcFQi7czfzP7O",
            "name": "图片分组",
            "icon": "FileAddOutlined",
            "shows": true,
            "path": "/groupimg",
            "httpViewPath": "",
            "order": 0,
            "pid": 62,
            "type": null,
            "filePath": "/admin/views/groupimg/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        },
        {
            "createTime": "2022/06/30 23:38:59",
            "updateTime": "2022/06/30 23:39:36",
            "id": 67,
            "user_id": 1,
            "meun_id": "y1_QSawtMzLMFlT5_qAvu",
            "name": "素材图库",
            "icon": "CameraOutlined",
            "shows": true,
            "path": "/material",
            "httpViewPath": "",
            "order": 0,
            "pid": 62,
            "type": null,
            "filePath": "/admin/views/material/Index.vue",
            "iframePath": "",
            "keepAlive": false,
            "tabHidden": false,
            "tabFix": false,
            "httpFilePath": ""
        }
    ]
    return {
        code: 1,
        message: '请求成功',
        data,
    }
})
