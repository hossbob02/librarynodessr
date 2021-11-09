const bookController=require('../controllers/book.controller')
const route = require('./auth.route')
const router=require('express').Router()
const GuardAuth=require('./guardAuth')
const multer=require('multer')



router.get('/',GuardAuth.isAuth,bookController.getAllBooksController)
router.get('/:id',GuardAuth.isAuth,bookController.getOneBookDetailsController)

route.get('/addbook',GuardAuth.isAuth,bookController.getAddBookController)
route.post('/addbook',multer({
storage:multer.diskStorage({
    destination:function (req, file, cb) {
            cb(null, 'assets/uploads')  
      },
    filename:function (req, file, cb) {
            cb(null, Date.now()+'-'+ file.originalname )      
    }
})
}).single('image'),
GuardAuth.isAuth,bookController.postAddBookController)



module.exports=router


