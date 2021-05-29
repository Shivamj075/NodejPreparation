require("dotenv").config()

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

app.use(express.json())

const posts = [
    {
        username: 'Kyle',
        title: "post 1"
    },
    {
        username: 'Jim',
        title: "post 2"
    }
]

let refreshTokens = []
// now we can call authenticateToken funcion as middleware
app.get('/posts', authenticateToken, (req, res)=>{
    res.json(posts.filter(post=> post.username === req.user.name))
})

// function generateAccessToken(user){
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'15S'})
// }
// app.post('/token', (req,res)=>{
//     const refreshToken = req.body.token
//     if (refreshToken==null) return res.sendStatus(401)
//     if(!refreshTokens.includes(refreshToken)) return res.SendStatus(403)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
//         if (err) return res.SendStatus(403)
//         const accessToken = generateAccessToken(user)
//         res.json({accessToken: accessToken})
//     })

// })

// app.delete('/logout', (req,res)=>{
//     refreshTokens = refreshTokens.filter(token=>token!==req.body.token)
//     res.SendStatus(204)
// })
app.post('/login', (req, res)=>{
    //Authenticate user
    const username = req.body.username
    const user = {name: username}
    // const accessToken = generateAccessToken(user)
    const accessToken=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token==null)    return res.SendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return res.SendStatus(403)
        req.user = user
        next()
    })

}
app.listen(3000)