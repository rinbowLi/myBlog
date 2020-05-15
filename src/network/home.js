import request from '@/network/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

//根据页码查询文章
export function selectArticleByPage(data) {
  return request({
    url: '/article/selectArticleByPage',
    method: 'post',
    data
  })
}

//查询文章总数
export function getArticleCount(data) {
  return request({
    url: '/article/getArticleCount',
    method: 'post',
    data
  })
}
