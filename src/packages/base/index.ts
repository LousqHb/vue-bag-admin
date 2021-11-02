import type {App} from 'vue';
import '@/packages/base/style'
import '@/packages/common/resize.ts'
import {setupRouter} from '@/packages/router'
import {setupStore} from '@/packages/store'
import {setupAndDesignVue} from '@/packages/plugin/ant-design-vue'
import {setupGlobDirectives} from '@/packages/extend/directive'
import {setVxeTable} from '@/packages/plugin/vxe-table'
import {setupGlobComponents} from '@/packages/components'
import '../../../mock'

const setupInit = (app: App) => {
    setupStore(app)
    setupRouter(app)
    setVxeTable(app)
    setupAndDesignVue(app)
    setupGlobDirectives(app)
    setupGlobComponents(app)
}

export default setupInit;