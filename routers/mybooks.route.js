const router=require('express').Router()
const bookController=require('../controllers/book.controller')
const multer=require('multer')
const GuardAuth=require('./guardAuth')
router.get('/',bookController.getMybooksPage)
router.post('/delete/:id',bookController.deleteBookController)

router.get('/update/:id',bookController.getMybookUpdatePage)


router.post('/update', multer({
    storage:multer.diskStorage({
        destination:function (req, file, cb) {  
          cb(null, 'assets/uploads')          
          },
        filename:function (req, file, cb) { 
                cb(null, Date.now()+'-'+ file.originalname )  
        }
    })
    }).single('image'),bookController.postUpdateBookContoller)




module.exports=router