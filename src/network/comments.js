import request from '@/network/request'

//添加评论
export function addComments(data) {
  return request({
    url: '/comment/addComments',
    method: 'post',
    data
  })
}

//根据id查询评论
export function selectCommentsById(data){
  return request({
    url:'./comment/selectCommentsById',
    method:'post',
    data
  })
}

//根据id删除评论
export function delComments(data){
  return request({
    url:'./comment/delComments',
    method:'post',
    data
  })
}

//根据页码查询评论
export function selectCommentsByPage(data) {
  return request({
    url: '/comment/selectCommentsByPage',
    method: 'post',
    data
  })
}