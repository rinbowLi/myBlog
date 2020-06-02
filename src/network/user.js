import request from '@/network/request'

//登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
