/******************************
脚本功能：书书猫
脚本作者：Yuer
更新时间：2024-07-12
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.iyykj\.cn\/ url script-response-body https://raw.githubusercontent.com/Yuehuaer/QX/main/ce1.js
[mitm] 
hostname = api.iyykj.cn
*******************************/
var Yuer = $response.body;
var obj =  JSON.parse(Yuer);
if($request.url.indexOf("/api/app/user/info") != -1)  {
 obj={
   "code" : 200,
  "data" : {
    "beanNum" : 0,
    "vipEndTime" : null,
    "inviteCode" : "SZRGUB4V",
    "gmtCreate" : "2024-07-12T16:19:52",
    "userName" : "bl0104882",
    "userStatus" : 1,
    "vipFlag" : 1,
    "nickName" : "用户0104882",
    "avatar" : null,
    "invitedFlag" : false,
    "goldNum" : 0,
    "vipType" : 0,
    "vipStartTime" : null,
    "gender" : 0
  },
  "msg" : "获取成功",
  "traceId" : "5c005461-803c-4fad-9031-91c3f8b7bdf4"
 };
}
Yuer = JSON.stringify(obj);
$done({body;Yuer});
