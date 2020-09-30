const courseService = require('../service/courseService');
const constants = require('../constants');

var globalRes;

module.exports.courseCreate =  async (req,res) => {
    globalRes = res;
    try {
        await courseService.courseCreate(req.body,courseCreateResponse);
    }catch(error){
        console.log('Something went wrong: Controller : courseCreate',error); 
    }
}
function courseCreateResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                if(type==1){
                    response.status = 200;
                    response.message = constants.COURSEMESSAGE.CREATE;
                    response.body = responseFromService;
                }
                else{
                    response.status = 201;
                    response.message = constants.COURSEMESSAGE.NOTALLOW;
                    response.body = responseFromService;
                }
            }
     }catch(error){
        console.log('Something went wrong: Controller :courseCreateResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


  
  module.exports.Allcourse =  async (req,res) => {
    globalRes = res;
    try {
        await courseService.Allcourse(req.body,AllcourseResponse);
    }catch(error){
        console.log('Something went wrong: Controller : Allcourse',error); 
    }
}
function AllcourseResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.COURSEMESSAGE.ALLCOURSE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :AllcourseResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


    
  module.exports.studentCourse =  async (req,res) => {
    globalRes = res;
    try {
        await courseService.studentCourse(req.body,studentCourseResponse);
    }catch(error){
        console.log('Something went wrong: Controller : studentCourse',error); 
    }
}
function studentCourseResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.COURSEMESSAGE.STUDENTCREATE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :studentCourseResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }
