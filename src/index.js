//   require('dotenv').config({path: './env'})
  import dotenv from 'dotenv'
  import mongoose from "mongoose"
  import {DB_NAME} from "./constants.js"
  import connectDB from './db/index.js'

  dotenv.config({
    path : './env'
  })

  connectDB()
 
















//   mongoose.connect(MONGO_URI,() => {
//     console.log("DB connect successfully")
//   })

// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,() => {
//              console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }   
//     catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })()