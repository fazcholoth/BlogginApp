import React from 'react'
import { FiUsers } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Admindashrow() {


    const data = [
        {
          type: "allusers",
          logo: <FiUsers />,
          count: "20",
          link: "/users",
        },
        {
          type: "allposts",
          logo: <FaBlogger />,
          count: "20",
          link: "/blogs",
        },
        {
          type: "allcategory",
          logo: <BiCategoryAlt />,
          count: "20",
          link: "/categories",
        },
      ];




  return (
    

         <div className="grid grid-cols-3 space-x-10 bg-white px-4">
            {data.map((item, index) => (
              <div className="" key={index}>
                <Link to={item?.type}>
                  <div className="flex justify-between items-center p-4 bg-white text-blue-800 shadow-xl">
                    <div className="flex items-center justify-center space-x-2 text-[16px]">
                      <span style={{ fontSize: "20px" }}>{item.logo}</span>{" "}
                      <span>{item.type}</span>
                    </div>
                    <div>{item.count}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div> 
  )
}

export default Admindashrow