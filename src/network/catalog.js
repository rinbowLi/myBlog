import request from '@/network/request'

//根据分类查询文章
export function selectArticleByCatalog(data) {
  return request({
    url: '/article/selectArticleByCatalog',
    method: 'post',
    data
  })
}