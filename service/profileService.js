
const constants = require('../constants');
var Database = require("../database/database");
var nodemailer = require('nodemailer');

module.exports.ProfileAdd =  async (req,callback) => {
    try {
        var name=req.body.name
        var email=req.body.email
        var phonenumber=req.body.phonenumber
        var aboutme=req.body.aboutme
        var city=req.body.city
        var country=req.body.country
        var company=req.body.company
        var school=req.body.school
        var hometown=req.body.hometown
        var language=req.body.language
        var gender=req.body.gender
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
                    var image;
                    var timestamp = Number(new Date());
                    var file = req.files.image.name;
                    filename = timestamp;
                  var profileAdd = "INSERT INTO profile (image,name,email,phonenumber,aboutme,city,country,company,school,hometown,language,gender)VALUES('"+filename+"','"+name+"','"+email+"',"+phonenumber+",'"+aboutme+"','"+city+"','"+country+"','"+company+"','"+school+"','"+hometown+"','"+language+"','"+gender+"')";
                  connection.query(profileAdd, async function (err, result, fields) {
                      if (err){
                          console.log("Query  is not executed");
                          callback(new Error(err),null,null);
                      }
                      else {
                        Object.keys(result).forEach(async function(key) {
                           var profile= result[key];
                           callback(null, {},1); 
                    
                        });
                      
                      }
                  });

                } // end of if database is selected
            });//end of changeUser
            connection.release();//release the connection
        }); // end of getConnection   
}catch(error){
    console.log('Something went wrong: Service: ProfileAdd',error);
    //throw new Error(error);
    callback(new Error(error),null,null);
}
}


module.exports.ProfileUpdate=  async (req,callback) => {
    console.log(req)
    try {
        var name=req.body.name
        var email=req.body.email
        var phonenumber=req.body.phonenumber
        var aboutme=req.body.aboutme
        var city=req.body.city
        var country=req.body.country
        var company=req.body.company
        var school=req.body.school
        var hometown=req.body.hometown
        var language=req.body.language
        var gender=req.body.gender
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
                    var timestamp = Number(new Date());
                    var file = req.files.file.name;
                    filename = timestamp;
                  var profileUpdate = "UPDATE  profile SET(image='"+filename+"',name='"+name+"',email='"+email+"',phonenumber="+phonenumber+",aboutme='"+aboutme+"',city='"+city+"',country='"+country+"',company='"+company+"',school='"+school+"',hometown='"+hometown+"',language='"+language+"',gender='"+gender+"')";
                  connection.query(profileUpdate, async function (err, result, fields) {
                      if (err){
                          console.log("Query  is not executed");
                          callback(new Error(err),null,null);
                      }
                      else {
                        Object.keys(result).forEach(async function(key) {
                           var profile= result[key];
                           callback(null, {},1);  
                        });
                      }
                  });
                } // end of if database is selected
            });//end of changeUser
            connection.release();//release the connection
        }); // end of getConnection   
}catch(error){
    console.log('Something went wrong: Service: ProfileUpdate',error);
    //throw new Error(error);
    callback(new Error(error),null,null);
}
}
