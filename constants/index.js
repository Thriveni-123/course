module.exports = {
    defaultServerResponse : {
        status : 205,
        message : '',
        body : {}
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    USERMESSAGE:{
        SIGNUP:'Registration completed successfully',
        ALREADY_REGISTER:'Email is already registered',
        REGISTER:'You have already registered with RTA . Please try logging in. ',
        INCORRECT_PASSWORD:'Incorrect Password. Please try again',
        SIGNIN:'Signin successfully',
       
    },
    PROFILEMESSAGE:{
        ADD:'Adding your details successfully',
        UPDATE:'Update your profile successfully'
    },
    COURSEMESSAGE:{
    CREATE:'Create the course detailssuccessfully',
    NOTALLOW:'Your are not allow to create course',
    ALLCOURSE:'Fetch all course successfully',
    STUDENTCREATE:'Fetch student created course'
    }
}