import request from '@/network/request'

//获取captcha图片验证码
export function captcha(data) {
  return request({
    url: '/captcha',
    method: 'get',
    data
  })
}

//添加留言
export function addmessage(data) {
  return request({
    url: '/message/addmessage',
    method: 'post',
    data
  })
}

//分页查询留言
export function selectMessageByPage(data) {
  return request({
    url: '/message/selectMessageByPage',
    method: 'post',
    data
  })
}

//获取留言总数
export function getMessageCount(data) {
  return request({
    url: '/message/getMessageCount',
    method: 'post',
    data
  })
}

//删除留言
export function delMessage(data) {
  return request({
    url: '/message/delMessage',
    method: 'post',
    data
  })
}
