import request from './index';

export function getData() {
  return request.get<{ data: any }>({ url: '/api/data' })
}
