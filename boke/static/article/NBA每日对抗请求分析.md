# NBA每日对抗请求分析

## 结合的graphql的请求
- controller.js中封装数据库字段的查询方法,query后面的数据结构是自定义出来的，直接在测试平台可查询验证。
```javascript
	let queryListActivities = (page)=> { // 活动中心列表查询
	  let queryString = `
	    query {
	      listActivities(page: ${page}, pageSize: 5) {
	        id
	        title
	        img
	        result
	        desc
	        resultListTitleKey
	        resultListTitleValue
	        resultList {
	          key
	          value
	        }
	      }
	    }
	  `
	  return postGraphql(queryString)
	}
```

```javascript
		{
		  listActivities(page: 1, pageSize: 2) {
		    id
		    img
		    result
		    desc
		    resultListTitleKey
		    resultListTitleValue
		    resultList {
		      key
		      value
		    }
		  }
		}
	结果为：
		{
		  "data": {
		    "listActivities": [
		      {
		        "id": 4,
		        "img": "activity_img/huodongbanner_TZmjt8t.jpg",
		        "result": "【逐鹿五人场，球星战靴大放送】活动获奖玩家",
		        "desc": "活动时间：10月10日~15日\r\n活动详情：活动期间每天【经典范特西】[经典五人场]送出一双球星战靴。\r\n活动规则：1）评分规则，按照五人场评分高低进行排名，若评分相同进入五人场时间越早则排名靠前。\r\n2）活动期间每天随机抽取一位五人场评分前十的玩家获得球星战靴。\r\n3）会通过公告公布获奖玩家。\r\n4）获奖的玩家可选球星战靴其中一款。\r\n5）加入官方QQ群628821457，添加大米QQ9511341，更方便领取奖品。",
		        "resultListTitleKey": "获奖名单",
		        "resultListTitleValue": "奖品",
		        "resultList": [
		          {
		            "key": "LFQ",
		            "value": "詹姆斯球鞋"
		          },
		          {
		            "key": "大米",
		            "value": "库里球衣"
		          },
		          {
		            "key": "Xat",
		            "value": "斯伯丁篮球"
		          }
		        ]
		      },
		      {
		        "id": 3,
		        "img": "activity_img/限时冲级活动.jpg",
		        "result": "",
		        "desc": "活动时间：10月18日~25日\r\n活动目的：活动期间提高留存至20%。\r\n活动投入：1万1千元\r\n活动目标：活动期间提高留存至20%，新玩家数4万。\r\n推广：发动社群转发、公众号、论坛\r\n活动规则：\r\n1）\t活动期间，玩家达到八级即进入抽奖池。\r\n2）\t显示活动时间倒计时（截止时间晚上25日20点）\r\n3）\t在提交联系方式的八级的玩家里随机抽取18名玩家获得奖品。",
		        "resultListTitleKey": null,
		        "resultListTitleValue": null,
		        "resultList": []
		      }
		    ]
		  }
		}
```
- 来自graphql.js中的两个方法：executegraphql, postGraphql，和vuex结合，顺便在store中更新字段，再混入computed属性中。