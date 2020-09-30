
const constants = require('../constants');
var Database = require("../database/database");
var nodemailer = require('nodemailer');

module.exports.Signup =  async ({name,email,password},callback) => {
    try {
         await Database.connectionPool.getConnection(async function(err, connection){ 
            connection.changeUser({
                database : Database.databaseName
            }, function(err) {
                if (err) {
                // console.log(err);
                    console.log("Database is not selected");
                    callback(new Error(err),null,null);
                // throw err
                }
                else {
                  var userdetails = "INSERT INTO user (name,email,password)VALUES('"+name+"','"+email+"','"+password+"')";
                  connection.query(userdetails, async function (err, result, fields) {
                      if (err){
                          console.log("Query  is not executed");
                          callback(new Error(err),null,null);
                      }
                      else {
                        Object.keys(result).forEach(async function(key) {
                           var signup= result[key];
                           callback(null, signup,1);  
                        });  
                      }
                  });
                } // end of if database is selected//////////////////////
            });//end of changeUser
            connection.release();//release the connection
        }); // end of getConnection
        
}catch(error){
    console.log('Something went wrong: Service: Signup',error);
    //throw new Error(error);
    callback(new Error(error),null,null);
}
}



module.exports.Signin =  async ({email,password},callback) => {
    try {
        await Database.connectionPool.getConnection(async function(err, connection){ 
             connection.changeUser({
                 database : Database.databaseName
             }, function(err) {
                 if (err) {
                     console.log("Database is not selected");
                     callback(new Error(err),null,null);
                 }else { //if database is selected
                    //////////////////////////////
                    // STEP=1 :check whether the user is already register 
                     var selectAssociates = "SELECT * FROM user WHERE email='"+email+"'";
                     //console.log(selectAssociates);
                     connection.query(selectAssociates, async function (err, result, fields) {
                         if (err){
                             console.log("Query  is not executed");
                             callback(new Error(err),null,null);
                         }else {   
                                     Object.keys(result).forEach(async function(key) {
                                         var dbPassword = result[key].password;  
                                         if(dbPassword==password){    //check whether the password and confirm password is same  
                                            callback(null,{},1);
                                         }else{
                                            callback(null,{},2);//type=3 means password not match
                                         }    
                                     });
                                 
                             }
                         });//SREP=1 end
                        //////////////////////////  
                 } // end of if database is selected
             });//end of changeUser
             connection.release();//release the connection
         });    // end of getConnection              
 }catch(error){
     console.log('Something went wrong: Service: Signin',error);
     callback(new Error(error),null,null);
 }

}
