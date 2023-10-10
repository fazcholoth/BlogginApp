import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function FeaturedPost({blog}) {

  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate(`/detailedpost/${blog._id}`);
   
  }

  const firstParagraph = blog.content.blocks.find(block => block.type === "paragraph");
  



  return (
    <div  onClick={handleClick} className="w-full h-full mt-2 px-4 shadow-md">
      <div className="flex gap-2 mb-1">
        <div>
          <img className="h-3 w-3 rounded-full" src={blog?.creatorimg} alt="" />
        </div>
        <p className="font-thin text-[13px]">{blog?.creator}</p>
        {/* <p className="font-thin text-[13px]">{blog?.createdAt}</p> */}
      </div>
      <div className="flex justify-center px-0">
        <div className="w-11/12">
          <h3 className="pb-1 font-bold text-xs">{blog?.heading}</h3>
          {/* <p className="text-[12px] break-all overflow-y-hidden line-clamp-2">{firstParagraph?.data?.text}
           
          </p> */}
        </div>
        {/* <div>
          <img className="w-24 h-24" src={blog?.image} alt="" />
        </div> */}
      </div>
      {/* <div className="flex justify-between ">
        <div className="flex justify-start gap-2 font-thin text-[10px] px-2">
          <p>What where reading</p> <p>{blog.readTime} min read</p>
        </div>
        <div className="flex justify-start gap-2">
          <div className="text-[10px]">
            <AiOutlineBook />
          </div>
          <div className="text-[10px]">
            <BiDotsHorizontalRounded />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedPost;
