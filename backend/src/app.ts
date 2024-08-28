import express, { urlencoded } from 'express'
import cors from 'cors'

// midleware
const app = express()
app.use(express.json())
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app
