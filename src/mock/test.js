/**
 * 测试数据
 */
const Mock = require('mockjs');

//let Random = Mock.Random; 随机数

const data = Mock.mock('/mock', {
    'list|1-10': [{
        'id|+1': 1,
        'num|1-100': 10,
        'color': '@color',
        'name': '@cname',
        'sex|1': ['男', '女', '其他']
    }],
    'userinfor': [{
        'openid': ''
    }]
})

export default data;