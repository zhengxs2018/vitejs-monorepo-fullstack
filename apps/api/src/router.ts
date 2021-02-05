import Router from '@koa/router'

import type { Message } from 'api-interfaces'

const router = new Router()

router.get('/api/message', async ctx => {
  const data: Message = {
    message: '这是消息222'
  }

  ctx.body = data
})

export default router
