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
export function selectLink(data) {
  return request({
    url: '/link/selectLink',
    method: 'post',
    data
  })
}

//分页查询友链
export function selectLinkByPage(data) {
  return request({
    url: '/link/selectLinkByPage',
    method: 'post',
    data
  })
}

//删除友链
export function delLink(data) {
  return request({
    url: '/link/delLink',
    method: 'post',
    data
  })
}
