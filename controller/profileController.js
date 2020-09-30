const profileService = require('../service/profileService');
const constants = require('../constants');

var globalRes;

module.exports.ProfileAdd =  async (req,res) => {
    globalRes = res;
    try {
        await profileService.ProfileAdd(req,ProfileAddResponse);
    }catch(error){
        console.log('Something went wrong: Controller : ProfileAdd',error); 
    }
}
function ProfileAddResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.PROFILEMESSAGE.ADD;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :ProfileAddResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }

  module.exports.ProfileUpdate =  async (req,res) => {
    globalRes = res;
    try {
        await profileService.ProfileUpdate(req,ProfileUpdateResponse);
    }catch(error){
        console.log('Something went wrong: Controller : ProfileUpdate',error); 
    }
}
function ProfileUpdateResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.PROFILEMESSAGE.UPDATE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :ProfileUpdateResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }