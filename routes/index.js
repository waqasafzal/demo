var express = require('express');
var router = express.Router();
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
  	
    var Functions = req.app.get('appFunctions');
    console.log('functions',Functions);
    /*var MySql = new Functions.MySql(req);
	
    
    function wiki_test()
    {
        return new Promise(function(resolve, reject) {
            //var MySql = new Functions.MySql(req);
            resolve("in the function");
        });
    }

    let test = wiki_test().then(function(result)
    {
     	let sendResponse = MySql.create_connection(req).then(function (result)
        {

            console.log(result);  
            res.render('index',{page_title:"Customers",body:"sample testing body",data: result});
        }, function(err) {
            return res.send(err);
        });
        
    }, function(err){


    });*/


    var MySql,Main_class;
    async.waterfall([
        function(callback) {
            console.log('1')
            Main_class = new Functions.MySql(req);
            
            console.log(Main_class) 
            callback(null, 'one', 'two');
        },
        function(arg1, arg2, callback) {
            console.log('2')
            let sendResponse = Main_class.create_connection(req);
            sendResponse.then(function(result) {
                console.log(sendResponse) 
                callback(null, 'one', 'two');
            })

            
        },
        function(arg1, callback) {
            console.log('3')
            let sendResponse = Main_class.select(req);
            sendResponse.then(function(result) {
                console.log(sendResponse) 
                callback(null, 'one', 'two');
            })
        }
    ], function (err, result) {
        // result now equals 'done'
    });

});

module.exports = router;
