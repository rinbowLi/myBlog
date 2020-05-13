import request from '@/network/request'

export function selectArticleByCatalog(data) {
  return request({
    url: '/article/selectArticleByCatalog',
    method: 'post',
    data
  })
}