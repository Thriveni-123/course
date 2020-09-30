const userService = require('../service/userService');
const constants = require('../constants');

var globalRes;

module.exports.Signup =  async (req,res) => {
    globalRes = res;
    try {
        await userService.Signup(req.body,SignupResponse);
    }catch(error){
        console.log('Something went wrong: Controller : Signup',error); 
    }
}
function SignupResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.SIGNUP;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :SignupResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


  

  module.exports.Signin =  async (req,res) => {
    globalRes = res;
    try {
        await userService.Signin(req.body,SigninResponce);
  
    }catch(error){
        console.log('Something went wrong: Controller : Signin',error); 
    }
}

function SigninResponce(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                if(type == 1)
                {
                    response.status = 200;
                    response.message = constants.USERMESSAGE.SIGNIN;
                    response.body = responseFromService;
                }
                else{
                    response.status = 201;
                    response.message = constants.USERMESSAGE.INCORRECT_PASSWORD;
                    response.body = responseFromService;
                }
                
            }
     }catch(error){
         console.log('Something went wrong: Controller : SigninResponce',error);
         
        response.message = error.message;
       
     }
     return globalRes.status(response.status).send(response);
  }
