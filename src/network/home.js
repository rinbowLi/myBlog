import request from '@/network/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function selectArticleByPage(data){
  return request({
    url: '/article/selectArticleByPage',
    method: 'post',
    data
  }) 
}