import ClipboardJS from 'clipboard'
import {
  Message
} from 'element-ui';

//获取当前时间
export function getFormatDate(dateString) {
  var nowDate = new Date(dateString);
  var year = nowDate.getFullYear();
  var month =
    nowDate.getMonth() + 1 < 10 ?
    "0" + (nowDate.getMonth() + 1) :
    nowDate.getMonth() + 1;
  var date =
    nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
  return year + "-" + month + "-" + date;
}

export function getFormatTime(dateString) {
  var nowDate = new Date(dateString);
  var year = nowDate.getFullYear();
  var month =
    nowDate.getMonth() + 1 < 10 ?
    "0" + (nowDate.getMonth() + 1) :
    nowDate.getMonth() + 1;
  var date =
    nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
  var hour =
    nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
  var min =
    nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
  return year + "-" + month + "-" + date + " " + hour + ":" + min;
}
/**参数说明： 
 * 根据长度截取先使用字符串，超长部分追加… 
 * str 对象字符串 
 * len 目标字节长度 
 * 返回值： 处理结果字符串 
 */
export function cutString(str, len) {
  //length属性读出来的汉字长度为1 
  if (str.length * 2 <= len) {
    return str;
  }
  var strlen = 0;
  var s = "";
  for (var i = 0; i < str.length; i++) {
    s = s + str.charAt(i);
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2;
      if (strlen >= len) {
        return s.substring(0, s.length - 1) + "...";
      }
    } else {
      strlen = strlen + 1;
      if (strlen >= len) {
        return s.substring(0, s.length - 2) + "...";
      }
    }
  }
  return s;
}

export function clipboard() {
  //为类名为copy-code的元素添加复制操作
  var clipboard = new ClipboardJS(".copy-code");
  //复制成功回调
  clipboard.on("success", function (t) {
    Message({
      message: '代码成功拷贝到剪贴板！',
      type: 'success'
    }), t.clearSelection()
  }), clipboard.on("error", function (t) { //复制失败回调
    Message.error('代码拷贝失败')
  })
}
