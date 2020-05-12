import request from '@/network/request'

export function selectArticleById(data) {
  return request({
    url: '/article/selectArticleById',
    method: 'post',
    data
  })
}