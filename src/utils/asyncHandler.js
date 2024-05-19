const asyncHandler = (requesthandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(rew,res,next))
        .catch(error => next(err))
    }
}





export { asynchandler }


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asunchandler = (func) => async () => {}


// const asyncHandler = (fn) => {async (req,res,next) => {
//     try{
//          await fn(req,res,next)
//     }catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }}