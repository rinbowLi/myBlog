import request from '@/network/request'

export function selectArticleBykeyword(data) {
  return request({
    url: '/article/selectArticleBykeyword',
    method: 'post',
    data
  })
}