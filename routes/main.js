var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');



/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('requset',req.body);
    res.render('main',{title:"main",body:"main Page"});

    // var Functions = req.app.get('appFunctions');
    // var MySql = new Functions.MySql(req);
    // let sendResponse = MySql.create_connection(req).then(function (result)
    // {

    //     console.log(result);  
    //     res.render('main',{page_title:"Customers",body:"sample testing body",data: result});
    //     // res.render('index',{page_title:"Customers - Node.js",data:result});
    
    // }, function(err) {
    //     return res.send(err);
    // });

});



router.post('/',  [
  					check('username').isEmail(),
   	 				//check('password').isLength({ min: 5 })
  				] , function(req, res, next) {
  
  console.log('in the function')
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  console.log(req.body);

   var Functions = req.app.get('appFunctions');
    Main_class = new Functions.MySql(req);

    let sendResponse = Main_class.new_select(req);
            sendResponse.then(function(result) {
                console.log(sendResponse) 
 })


  

});


module.exports = router;
