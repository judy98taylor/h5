var sign = require('./sign.js');
//jsapi_ticket
//http://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=ACCESS_TOKEN

//jsapi_ticket
//http://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=ACCESS_TOKEN

//console.log(sign('jsapi_ticket', 'http://example.com'));
console.log(sign('jsapi_ticket', 'http://example.com'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */
