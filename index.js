var AWS = require('aws-sdk');
AWS.config.loadFromPath('./creds.json');

var elbv2 = new AWS.ELBv2();

elbv2.describeTargetGroups(function(err, data){
	if(err) throw err;
	for(i in data.TargetGroups){
		console.log(data.TargetGroups[i].TargetGroupArn);
	}
});