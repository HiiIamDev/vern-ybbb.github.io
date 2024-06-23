const express = require('express')
const path =  require('path')
const app = express()
const corsOrigin = require( './middlewares/corsOrg')

const env = process.env.NODE_ENV === 'prod' 
    ? path.resolve('./environment/.env.production')
    : path.resolve('./environment/.env.development')
require('dotenv').config({ path: env });

const port = process.env.PORT

app.use(express.json())

// cors option
app.use(corsOrigin())

// app.get('/api', (req, res) => {
    
// })

app.post ('/contact', (req, res) => {
    const data = req.body
    if (
        data.email.length <= 7 ||
        data.name.length <= 5 ||
        data.msg.length <= 4 ||
        data.name == "ybbbadmin"
    ) {
        return res.status(400).json('Error! something seems not right :( ')
    }
    
    console.log(data)
    res.sendStatus(200)
}) 

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`)
})