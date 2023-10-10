import React ,{useState,useEffect}from 'react'
import { FiUsers } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from 'axios';
import dayjs from 'dayjs';




function Admincategory() {


  const [categories, setcategories] = useState([]);
  const [catid, setcatid] = useState('');
  const [updatedcategory, setupdatedcategory] = useState('');
  const [catname, setcatname] = useState('');

  const data = [
    {
      type: "Users",
      logo: <FiUsers />,
      count: "20",
      link: "/users",
    },
    {
      type: "Blogs",
      logo: <FaBlogger />,
      count: "20",
      link: "/blogs",
    },
    {
      type: "Category",
      logo: <BiCategoryAlt />,
      count: "20",
      link: "/categories",
    },
  ];


  const handlelist = async(catid)=>{
    const updatedcategory = await axios.post(
      `http://localhost:8000/admin/listcategory/${catid}`,
    );
     setupdatedcategory(updatedcategory)
  }

  const handleunlist = async(catid)=>{
    const updatedcategory = await axios.post(
      `http://localhost:8000/admin/unlistcategory/${catid}`,
    );
    setupdatedcategory(updatedcategory)
  }

  const handleaddcategory = async(catid)=>{
    const updatedcategory = await axios.post(
      "http://localhost:8000/admin/addcategory",
      {name:catname},
    );
    setupdatedcategory(updatedcategory)
    setcatname("")
  }

  useEffect(() => {
    const fetchcategory = async () => {
      const response = await axios.get("http://localhost:8000/admin/categories");
  
      const categories = response.data;
      setcategories(categories);
    };
  
    fetchcategory();
  }, [updatedcategory]);

 


  return (
    <>

    <div className="grid grid-cols-3 bg-white px-4 gap-4">
       {categories.map((category, index) => (
         <div key={index} className="shadow-2xl py-2">
          <div className=" flex items-center justify-center py-1"><div className="font-extrabold">{category.name}</div></div>
          <div className="flex justify-center items-center font-thin text-xs text-gray-500 py-1">Created On {dayjs(category?.createdAt).format('DD MM YYYY')}</div>
          <div className="flex items-center justify-center"><div className="bg-blue-700 rounded-lg px-3 text-white text-xs">{category?.listed?(<button className="" onClick={()=>{handleunlist(category._id)}} >Unlist</button>):(<button onClick={()=>{handlelist(category._id)}} >List</button>)}</div></div>
         </div>
       ))}
     </div> 
     <div className="flex justify-center items-center">
       <div className="col-span-1 shadow-xl px-2 py-3 border-blue-200 border-2 flex-col justify-evenly">
        <div className="px-2 py-2 ">
          <label htmlFor="category">Category Name</label>
          <input className="w-full shadow-lg rounded-2xl outline-slate-400 px-2"value={catname}
            onChange={(e) => {
              setcatname(e.target.value);
            }} type="text" /></div>
        <div className="flex items-center justify-center"><div className="bg-blue-700 text-white rounded-2xl px-2"><button onClick={handleaddcategory} >Add Category</button></div></div>
       </div>
     </div>
     </>
)
}

export default Admincategory