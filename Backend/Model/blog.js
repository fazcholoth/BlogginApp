import mongoose from "mongoose";


const blogPostSchema = new mongoose.Schema({
  heading: {
    type: String,
    
  },
  creator: {
    type: String,
    
  },
  topic: {
    type: String,
    
  },
  image: {
    type: String,
    
  },
  creatorimg: {
    type: String,
    
  }
  ,
  content: {
    type: Object,
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  readTime: {
    type : Number
  }
});


const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost