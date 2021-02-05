import { mockHttpRequest } from 'api-mock'

mockHttpRequest('/api/user/:id', (req) => {
  return {
    id: req.params.id,
    name: '@cname',
  }
})
