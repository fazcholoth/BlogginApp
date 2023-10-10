import user from "../Model/user.js";
import BlogPost from "../Model/blog.js";
import cloudinary from '../Utils/cloudinary.js'
import topic from "../Model/Topic.js";

export const getAllpost = async(req,res)=>{
    
    try {

       
       let allBlogs = await BlogPost.find({}).sort({createdAt:-1})
       
       return res.status(200).json(allBlogs)

    } catch (error) {
        console.log(error);
    }
}


export const getblog = async(req,res)=>{
    
    try {

       console.log(req.params.blogid);

       let blog = await BlogPost.findOne({_id:req.params.blogid})
       
       return res.status(200).json(blog)

    } catch (error) {
        console.log(error);
    }
}

export const registerUser = async(req,res)=>{
    
    try {

        const { url } = await cloudinary.uploader.upload(req?.file?.path);
        const Name = req.body.name
        const Password = req.body.password
        const Email = req.body.email

        const userExists = await user.findOne({name:Name,password:Password })
        
        const User = new user({
            name:Name,
            password:Password,
            image:url,
            email:Email
        })

            if (!userExists) {
                await User.save() 
                res.status(200).json({message:User})
                return;
            } else if (userExists&&userExists?.blocked===true) {
                res.json({error:"You Are Blocked"})
            }else{
                res.json({message:userExists})
            }
       
    } catch (error) {
        console.log(error);
    }
}

export const getfeaturedBlogs = async(req,res)=>{
    
    try {

       
       let featuredBlogs = await BlogPost.find({}).limit(3)
       
       return res.status(200).json(featuredBlogs)

    } catch (error) {
        console.log(error);
    }
}

export const getrecommentedTopics = async(req,res)=>{
    
    try {

       
       let recommentedTopics = await topic.find({}).limit(10)
       
       return res.status(200).json(recommentedTopics)

    } catch (error) {
        console.log(error);
    }
}


export const getCategories = async(req,res)=>{
    
    try {

       
       let categories = await topic.find({}).limit(5)
       
       return res.status(200).json(categories)

    } catch (error) {
        console.log(error);
    }
}

export const getcategoryblogs = async(req,res)=>{
    
    try {

       const catId = req.params.categoryid
        // 
      
       console.log(catId);
       let categoryblogs = await BlogPost.find({ topic: catId.trim() }).exec();
       console.log(categoryblogs);
       return res.status(200).json(categoryblogs)

    } catch (error) {
        console.log(error);
    }
}


export const getwriters = async(req,res)=>{
    
    try {

       
       let topWriters = await user.find({}).limit(3)
       
       return res.status(200).json(topWriters)

    } catch (error) {
        console.log(error);
    }
}


export const getusers = async(req,res)=>{
    
    try {

       
       let topWriters = await user.find({})
       
       return res.status(200).json(topWriters)

    } catch (error) {
        console.log(error);
    }
}


