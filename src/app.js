import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extented:true, limit:'16kb'
}))
app.use(express.static("public"))

app.listen(process.env.PORT,() => {
    console.log(`backend code running on port ${processs.env.PORT}`)
})
app.use(cookieParser())


export {app}