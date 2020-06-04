import request from '@/network/request'

//根据id查询文章
export function selectArticleById(data) {
  return request({
    url: '/article/selectArticleById',
    method: 'post',
    data
  })
}


//查询上下篇文章
export function selectNextAndPrevArticle(data){
  return request({
    url: '/article/selectNextAndPrevArticle',
    method: 'post',
    data
  })
}

//修改文章
export function updateArticle(data){
  return request({
    url: '/article/updateArticle',
    method: 'post',
    data
  })
}


//删除文章
export function delArticle(data){
  return request({
    url: '/article/delArticle',
    method: 'post',
    data
  })
}


//新增文章
export function addArticle(data){
  return request({
    url: '/article/addArticle',
    method: 'post',
    data
  })
}