import Mock, { MockCbOptions } from 'better-mock'

import { match } from 'path-to-regexp'

export interface HttpRequest {
  url: string
  path: string
  query: Record<string, string>
  params: Record<string, string | number>
}

/**
 * 拦截 http 请求
 *
 * @param rule     路由规则
 * @param type
 * @param callback
 */
export function mockHttpRequest(rule: string, callback: (req: HttpRequest) => any): void
export function mockHttpRequest(
  rule: string,
  type: string,
  callback: (req: HttpRequest) => any,
): void
export function mockHttpRequest(rule: string, ...args: unknown[]): void {
  const parse = match(rule)

  const qs = (searchParams: URLSearchParams) => {
    const params: Record<string, string> = {}

    searchParams.forEach((value, key) => {
      params[key] = value
    })

    return params
  }

  const callback = args.pop() as (...args: unknown[]) => unknown

  const handler = (options: MockCbOptions) => {
    const path = options.url
    const url = new URL(path, window.location.origin)

    return Mock.mock(
      callback({
        url: url.toString(),
        path: path,
        query: qs(url.searchParams),
        // @ts-ignore
        params: parse(path).params || {},
      }),
    )
  }

  if (args.length === 2) {
    Mock.mock(rule, args[0] as string, handler)
  } else {
    Mock.mock(rule, handler)
  }
}
