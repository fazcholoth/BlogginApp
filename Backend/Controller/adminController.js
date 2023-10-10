import admin from "../Model/admin.js";
import cloudinary from '../Utils/cloudinary.js'
import BlogPost from "../Model/blog.js";
import topic from "../Model/Topic.js";
import User from "../Model/user.js";



 export const loginAdmin = async (req, res) => {
    

    const {email,password} = req.body
  
    
    const adminExists = await admin.findOne({email:email,password:password})
    
    if (adminExists) {
      res.json({message:adminExists})
    }else{
      res.json({error:"Not A  Authorised Admin"}) 
    }

  }

export const uploadFile = async(req,res)=>{
    
    try {

        const { url } = await cloudinary.uploader.upload(req.file.path);
        res.json({success:1,
            file :{
                url :url
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const uploadImage = async(req,res)=>{
   
    try {
    
        const { url } = await cloudinary.uploader.upload(req.file.path);
        
        res.status(200).json({image:url})
        return;
       
    } catch (error) {
        console.log(error);
    }
}

export const uploadBlog = async(req,res)=>{
    console.log(req.body.content.time);
    try {
        const Topic = req.body.topic
        
        const topicExists = await topic.findOne({name:Topic })

        if (!topicExists) {

            const newTopic = new topic({
                name:Topic
            })
            
            newTopic.save()

        }
        

        const newBlog = new BlogPost(req.body)
        newBlog.save()
        res.status(200).json(newBlog)
        return;
       
    } catch (error) {
        console.log(error);
    }
}

export const getCategoriesforadmin = async(req,res)=>{
    
    try {

       
       let categories = await topic.find({})
       
       return res.status(200).json(categories)

    } catch (error) {
        console.log(error);
    }
}

export const unlistCategory = async(req,res)=>{
    
    try {

        const catid = req.params.catid

       
       const updatedcategory = await topic.findByIdAndUpdate(catid, {listed:false} , {
        new: true,
      })
       
       return res.status(200).json(updatedcategory)

    } catch (error) {
        console.log(error);
    }
}

export const listCategory = async(req,res)=>{
    
    try {

        const catid = req.params.catid

       
       const updatedcategory = await topic.findByIdAndUpdate(catid, {listed:true} , {
        new: true,
      })
       
       return res.status(200).json(updatedcategory)

    } catch (error) {
        console.log(error);
    }
}

export const addCategory = async(req,res)=>{
    
    try {

        const name = req.body.name

        const newcategory = new topic({
            name:name})

       
       await newcategory.save()
       return res.status(200).json(newcategory)

    } catch (error) {
        console.log(error);
    }
}


export const deletePost = async(req,res)=>{
    
    try {

        const blogid = req.params.blogid
        await BlogPost.deleteOne({ _id:blogid });

       return res.status(200).json({deleted:blogid})

    } catch (error) {
        console.log(error);
    }
}

export const blockUser = async(req,res)=>{
    
    try {

        const userid = req.params.userid
        
        const updateduser = await User.findByIdAndUpdate(userid, {blocked:true} , {
            new: true,
          })

       return res.status(200).json({updateduser})

    } catch (error) {
        console.log(error);
    }
}

export const unblockUser = async(req,res)=>{
    
    try {

        const userid = req.params.userid
        const updateduser = await User.findByIdAndUpdate(userid, {blocked:false} , {
            new: true,
          })

       return res.status(200).json({updateduser})

    } catch (error) {
        console.log(error);
    }
}