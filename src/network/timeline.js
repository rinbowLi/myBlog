import request from '@/network/request'

//添加时光轴内容
export function addtimeline(data) {
  return request({
    url: '/timeline/addtimeline',
    method: 'post',
    data
  })
}

//查询所有时光轴内容
export function selectTimeline(data) {
  return request({
    url: '/timeline/selectTimeline',
    method: 'post',
    data
  })
}

//分页查询时光轴内容
export function selectTimelineByPage(data) {
  return request({
    url: '/timeline/selectTimelineByPage',
    method: 'post',
    data
  })
}

//删除时光轴内容
export function delTimeline(data) {
  return request({
    url: '/timeline/delTimeline',
    method: 'post',
    data
  })
}
