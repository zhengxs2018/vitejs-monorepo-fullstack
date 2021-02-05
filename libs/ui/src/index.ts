import type { App, Plugin } from 'vue'

import ConfigProvider from './config-provider'

import Button from './button/index'

const components = [ConfigProvider, Button]

export { ConfigProvider, Button }

export * from './types'

function install(app: App) {
  for (const comp of components) {
    switch (true) {
      case typeof comp.install === 'function':
        // @ts-ignore
        comp.install(app)
        break
      default:
        app.component(comp.name, comp)
    }
  }
}

export default <Plugin>{
  version: '__VERSION__',
  install,
}
