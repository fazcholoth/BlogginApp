import  Express  from "express";
import * as userController from '../Controller/userController.js'
import Upload from '../Utils/multer.js';



const router = Express.Router()

router.get('/getallblogs',userController.getAllpost)

router.get('/getfeaturedblogs',userController.getfeaturedBlogs)


router.post('/registeruser',Upload.single('image'),userController.registerUser)


router.get('/getblog/:blogid',userController.getblog )


router.get('/recommentedtopics',userController.getrecommentedTopics)

router.get('/getwriters',userController.getwriters)


router.get('/getusers',userController.getusers)

router.get('/categories',userController.getCategories)

router.get('/getcategoryblogs/:categoryid',userController.getcategoryblogs)



export default router