import request from '@/network/request'

//添加友链内容
export function addLink(data) {
  return request({
    url: '/link/addLink',
    method: 'post',
    data
  })
}

//查询所有友链内容
export function selectLink(data){
  return request({
    url: '/link/selectLink',
    method: 'post',
    data
  })
}