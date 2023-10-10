import mongoose from "mongoose";
const Url = 'mongodb+srv://fazil:fazil123@cluster0.eto1yee.mongodb.net/'
const connection = async()=>{
    try {
        await  mongoose.connect(Url)
        console.log('database connected');
    } catch (error) {
        console.log(error);
    }
}

export default connection