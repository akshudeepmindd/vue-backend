const responseHelper=require('../helpers/response')
const errorCode=error=>{
    let code=400;
    switch(error.name){
        case 'ValidatiorError':
        code = 422
        break
        case 'ServerError':
        code=500
        break
        case 'JsonWebTokenError':
        case 'unauthorizedError':
        code=401
        break 
        default:
            break
    }
    return code
}
const errorHandler=(req,res,next,error)=>{
  const code= errorCode(error)
  responseHelper.failure(res,error,code)
}
module.exports=errorHandler