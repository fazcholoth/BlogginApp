import React ,{useEffect, useState}from "react";
import axios from "axios";




function Adminallpost() {


  const [allblogs, setallblogs] = useState([]);
  const [blogid, setblogid] = useState("");
  const [updatedblogs, setupdatedblogs] = useState("");

  useEffect(() => {
    const fetchblogs = async () => {
      const response = await axios.get("http://localhost:8000/getallblogs");
 
      const blogs = response.data;
      setallblogs(blogs);
    };
 
    fetchblogs();
  }, [updatedblogs]);


  const handledeletepost = async(blogid)=>{
    const updatedblog = await axios.post(
      `http://localhost:8000/admin/deletepost/${blogid}`,
    );
    setupdatedblogs(updatedblog)

  }




  return (
    <div className="grid grid-cols-3 gap-4  bg-white px-2">
      {allblogs?.map((blog,index)=>(
        <div  key={index} className="p-4 shadow-2xl mx-1 my-1 space-y-4 hover:-translate-y-3 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex justify-between">
          <div>
            <img className="h-5 w-5 rounded-full" src={blog?.image} alt="" />
          </div>
          <div>{blog.creator}</div>
        </div>
        <div>
        <p className="line-clamp-3 text-sm text-left">{blog?.heading}</p>
        
          <p className="line-clamp-3 text-xs text-left font-thin">{blog?.content?.blocks?.find(block => block?.type === "paragraph")?.data?.text}</p>
        </div>
        <div className="flex justify-end">
        
        <div className="bg-blue-700 rounded-lg px-2 hover:bg-red-600"><button onClick={()=>{handledeletepost(blog._id)}} className="text-white text-xs my-0">Delete</button></div>
        </div>
      </div>
      ))} 
    </div>
  );
}

export default Adminallpost;
