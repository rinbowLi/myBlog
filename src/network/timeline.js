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
export function selectTimeline(data){
  return request({
    url: '/timeline/selectTimeline',
    method: 'post',
    data
  })
}