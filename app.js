//const path = require('path')
const express = require('express')
//const hbs = require('hbs')


const app = express()
//const publicdir =path.join(__dirname,"../public")
//const viewsdir = path.join(__dirname,"../templates/views")
//const partialsdir = path.join(__dirname,"../templates/partials")

//app.set('view engine','hbs')
//app.set('views',viewsdir)
//hbs.registerPartials(partialsdir)

//app.use(express.urlencoded({ extended: true }))


//app.use(express.static(publicdir))

// app.get('',(req,res)=>{
//     res.render("index",{
//         title: 'best of the best'
//     })
// })

app.get('/products',(req,res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send({
        products:[]
    })
})

app.post('/products',(req,res)=>{
    console.log(req.query)
    console.log(req.param('page'))
    console.log(req.body.page)
    res.send({
        products:[]
    })
})

// app.get('/about',(req,res)=>{
//     res.send("About us page")
// })

// app.get('/weather',(req,res)=>{
//     res.send("Weather page of the site")
// })
// //404 handler
// app.get('*',(req,res) =>{
//     res.render('404page')
// })


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})