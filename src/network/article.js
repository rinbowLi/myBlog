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