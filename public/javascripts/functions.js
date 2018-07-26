class Person {
   constructor(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
   }

   display() {
       console.log(this.firstName + " " + this.lastName);
   }
};

class MySql{


	constructor(req)
	{
		console.log("DB connection has been initiated...")
		// var _this = this;
		// return new Promise(function(resolve, reject) {
		// 	req.getConnection(function(err,connection){
		// 		_this.connection = connection;
		// 		resolve(connection);
		// 	});
		// });
		

	}

	create_connection(req){

		console.log("DB connection has been initiated...")
		var _this = this;
		return new Promise(function(resolve, reject) {
			req.getConnection(function(err,connection){
				_this.connection = connection;
				resolve(connection);
			});
		});


	}

	select(req){
		
		let _this = this;
		console.log("in function");
		console.log(_this.connection);
		return new Promise(function(resolve, reject) {
		
			var data;
			//req.getConnection(function(err,connection){
		       	_this.connection.query('SELECT * FROM users',function(err,rows)     {
		        if(err)
		           reject(err)
		           //console.log("Error Selecting : %s ",err );
		     		
		     		//console.log(rows);

		            //res.render('customers',{page_title:"Customers - Node.js",data:rows});
		        
		            data = rows;
		            resolve(data);
		        });
		       
		    //});
		});


    }

    new_select(req,data){
    	let _this = this;
		console.log("in function");
		let user = req.body['username'][0];
		let pass = req.body['username'][1];
		console.log(user);
		console.log(pass);

		return new Promise(function(resolve, reject) {

			var data;
			req.getConnection(function(err,connection)
			{
		       	connection.query("INSERT INTO users (name,password) VALUES ('"+user+"','"+pass+"')",function(err,rows)     
		       	{
		        if(err)
		           reject(err)
		           //console.log("Error Selecting : %s ",err );
		     		
		     		//console.log(rows);

		            //res.render('customers',{page_title:"Customers - Node.js",data:rows});
		        
		            data = rows;
		            resolve(data);
		        });
		       
		    });
		});
    }

};




module.exports = {

	Person : Person,
	MySql  : MySql
}