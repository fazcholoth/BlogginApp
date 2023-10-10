import  Express  from "express";
import * as adminController from '../Controller/adminController.js'
import Upload from '../Utils/multer.js';

const router = Express.Router()

router.post('/uploadFile',Upload.single('file'),adminController.uploadFile)

router.post('/uploadmainimg',Upload.single('image'),adminController.uploadImage)

router.post('/uploadBlog',adminController.uploadBlog)

router.get('/categories',adminController.getCategoriesforadmin)


router.post('/login',adminController.loginAdmin)

router.post('/listcategory/:catid',adminController.listCategory)

router.post('/unlistcategory/:catid',adminController.unlistCategory)

router.post('/addcategory',adminController.addCategory)

router.post('/deletepost/:blogid',adminController.deletePost)

router.post('/blockuser/:userid',adminController.blockUser)

router.post('/unblockuser/:userid',adminController.unblockUser)

export default router