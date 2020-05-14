import request from '@/network/request'

export function addComments(data) {
  return request({
    url: '/comment/addComments',
    method: 'post',
    data
  })
}

export function selectCommentsById(data){
  return request({
    url:'./comment/selectCommentsById',
    method:'post',
    data
  })
}