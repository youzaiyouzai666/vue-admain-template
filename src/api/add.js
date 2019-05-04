import request from '@/utils/request'

export default function getAdd(params) {
  return request({
    url: '/app/list',
    method: 'get',
    params
  })
}
