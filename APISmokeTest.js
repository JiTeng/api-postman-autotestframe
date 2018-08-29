var newman = require('newman'); // require newman in your project 
var nodemailer  = require('nodemailer');
var fs = require('fs');

var export_file = './htmlResults_for_mail.html';
var export_file_junit = './junit.xml';
var collection_file = './API.postman_collection.json';
var env_file = './postman_environment.json';

// call newman.run to pass `options` object and wait for callback 
newman.run({
    collection: require(collection_file),
    reporters: ['html','junit'],
    reporter : { html : { export : export_file,template: './template.hbs'}, junit : { export : export_file_junit}} ,
    environment: require(env_file)
}, function (err,summary) {
    if (err) { throw err; }
    console.log('collection run complete!');

    var network_total = summary['run']['stats']['requests']['total'];
    var network_failed = summary['run']['stats']['requests']['failed'];
    var network_success = network_total - network_failed;
    
    var unit_total = summary['run']['stats']['assertions']['total'];
    var unit_failed = summary['run']['stats']['assertions']['failed'];
    var unit_success = unit_total - unit_failed;
    var stats = "接口调用"+network_total+"次，成功"+network_success+"次，失败"+network_failed+"次。\n共执行测试用例"+unit_total+"次，成功"+unit_success+"次，失败"+unit_failed+"次";
    
    var tracelog = JSON.stringify(summary, null, 2);


    
    var arr = summary['run']['failures'];
    var test_names_failures='';
    for ( var i = 0; i <arr.length; i++){
        test_names_failures=test_names_failures+(i+1)+'、'+'用例名称：'+arr[i].error.test+'。 执行信息：'+arr[i].error.message+';'+' '+'\r\n';
    }
    
    //var arr2 = summary['collection'];
    //console.log(typeof(summary['PostmanCollection']));
    //var test_names_all='';
    //for ( var j = 0; j <arr2.length; j++){
        //test_names_all=test_names_all+(j+1)+'、'+arr2[j].name+';';
    //}
    //test_names_all=arr2;
    
    send(stats,tracelog,test_names_failures);
    
    console.log('emmail sent complete!');

});

function send(sub,tracelog,test_names_failures){
    var transporter = nodemailer.createTransport({
      service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        user: '844563792@qq.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'umxyndujkobxbejg',
      }
	});
    
    var html = fs.readFileSync(export_file);
    var to = 'wbwang@inspur.com;mayantang@inspur.com;xuyp@inspur.com;hljun@inspur.com;jiteng@inspur.com;lijia02@inspur.com;qipengtao@inspur.com;lixiliang01@inspur.com';
    //var to = 'jiteng@inspur.com';
	var mailOptions = {
		from: "844563792@qq.com",
		to: to,
		subject: "质量链网API（测试环境）测试报告："+sub,
        html:html,
        attachments:[
                {   
                    filename: '失败测试用例信息.txt',
                    content: test_names_failures,
                    contentType: 'text/plain'
                },
                {   
                    filename: 'tracelog.txt',
                    content: tracelog,
                    contentType: 'text/plain'
                }
        ],
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			throw error;
		} else {
			fn();
		}
	});
}
