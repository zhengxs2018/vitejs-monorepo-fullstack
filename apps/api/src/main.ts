import type { Server } from 'http'

import config from 'config'

import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import router from './router'

const app = new Koa()

// 修改全局配置
app.keys = config.get('keys')
app.proxy = config.get('proxy')

// 添加全局中间件
app.use(bodyparser({ strict: true }))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.get('listen'), function onReady(this: Server) {
  const info = this.address()
  const port = typeof info === 'string' ? info.split(':')[1] : info?.port
  console.log(`Listen on http://127.0.0.1:${port}`)
})
