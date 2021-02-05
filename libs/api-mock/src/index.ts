import Mockjs from 'better-mock'
import { mockHttpRequest } from './request'

Mockjs.setup({
  timeout: '800-1500',
})

export { mockHttpRequest }

export default {
  version: '__VERSION__',
}
