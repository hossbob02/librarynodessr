const express=require('express')
const path=require('path')
const routerHome=require('./routers/home.route')
const routerBook=require('./routers/book.route')
const routerAuth=require('./routers/auth.route')
const routeMybooks=require('./routers/mybooks.route')
const routeContact=require('./routers/contact.route')
const routeAbout=require('./routers/about.route')
const session=require('express-session')
const MongoDbStore=require('connect-mongodb-session')(session)
const flash=require('connect-flash')


const app=express()


app.use(express.static(path.join(__dirname,'assets')))

app.set('view engine','ejs')
app.set('views','views')

var Store=new MongoDbStore({
    uri:'mongodb://localhost:27017/library',
    collection:'sessions'
}) 
app.use(flash())
app.use(session({
    secret:'this is my secret key dfjkbnjdfnbhjshdvbshdvsd',

    store:Store,
    resave: true,
    saveUninitialized: true
}))

app.use('/',routerHome)
app.use('/books',routerBook)
app.use('/',routerAuth)
app.use('/mybooks',routeMybooks)
app.use('/',routeContact)
app.use('/',routeAbout)


app.get('/dashboard',(req,res,next)=>{
    res.render('dashboard')
})
app.get('/tables',(req,res,next)=>{
    res.render('tables')
})

app.listen(3000,()=>console.log('server run in port 3000'))