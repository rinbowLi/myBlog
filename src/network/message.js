import request from '@/network/request'

export function captcha(data) {
  return request({
    url: '/captcha',
    method: 'get',
    data
  })
}


export function addmessage(data) {
  return request({
    url: '/message/addmessage',
    method: 'post',
    data
  })
}

export function selectMessageByPage(data) {
  return request({
    url: '/message/selectMessageByPage',
    method: 'post',
    data
  })
}
export function getMessageCount(data) {
  return request({
    url: '/message/getMessageCount',
    method: 'post',
    data
  })
}