const express = require('express')
const app = express()
const port = 5500;

app.use(express.static('public'))
app.set('views', 'public');
app.set('view engine', 'pug');


// app.get('/', (req, res,next ) => {
//     res.render
// })
app.get('/msg', (req, res, next)=>{
    console.log(req.query.message)
    res.render("msg", {message: req.query.message})
})
const server = app.listen(port, '0.0.0.0')
