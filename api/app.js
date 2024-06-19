import express from 'express'
import validator from 'validator'
const app = express()
const port = 5000
import cors from 'cors'

app.use(express.json())
app.use(cors())

app.post ('/contact', (req, res) => {
    const data = req.body
    if (
        data.email.length <= 7 ||
        !validator.isEmail(data.email) || 
        data.name.length <= 5 ||
        data.msg.length <= 4
    ) {
        return res.status(400).json('Error! something seems not right :( ')
    }
    
    console.log(data)
    res.sendStatus(200)
}) 

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`)
})