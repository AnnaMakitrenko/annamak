var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	console.log('got it!')
	var data=req.body
	var age = data['Age']
	//data.match(/(Name):[a-z]{0,}/i)
	console.log(data['Name'],data['Age'])
	if (data['Name'].match(/S/i))
	{
		age=Number(age)+10
	}
	else
	{
		age=Number(age)-10
	}
	res.render('formsent',{value: age});

});

module.exports = router;