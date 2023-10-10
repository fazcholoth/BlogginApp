import React, { useEffect, useState } from "react";
import Mainheader from "./Mainheader";
import SinglePost from "./Userpostrow";
import axios from "axios";
import FeaturedPost from "./Featured";
import Connect from "./Connect";
import Recommented from "./Recommented";
import Follow from "./Follow";
import { useNavigate } from "react-router-dom";
import CatHeader from "./CatHeader";
import { GrAdd } from "react-icons/gr";

function Userhome() {
  const [allblogs, setallblogs] = useState([]);
  const [featuredblogs, setfeaturedblogs] = useState([]);
  const [topics, settopics] = useState([]);
  const [writers, setwriters] = useState([]);
  const [categories, setcategories] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchfeaturedblogs = async () => {
      const response = await axios.get("http://localhost:8000/getfeaturedblogs");

      const blogs = response.data;
      setfeaturedblogs(blogs);
    };

    fetchfeaturedblogs();
  }, []);


  useEffect(() => {
    const fetchwriters = async () => {
      const response = await axios.get("http://localhost:8000/getwriters");

      const writers = response.data;
      setwriters(writers);
    };

    fetchwriters();
  }, []);



  useEffect(() => {
    const fetchrecommentedTopics = async () => {
      const response = await axios.get("http://localhost:8000/recommentedtopics");

      const topics = response.data;
      settopics(topics);
    };

    fetchrecommentedTopics();
  }, []);


  useEffect(() => {
   const fetchblogs = async () => {
     const response = await axios.get("http://localhost:8000/getallblogs");

     const blogs = response.data;
     setallblogs(blogs);
   };

   fetchblogs();
 }, []);



 useEffect(() => {
  const fetchcategory = async () => {
    const response = await axios.get("http://localhost:8000/categories");

    const categories = response.data;
    setcategories(categories);
  };

  fetchcategory();
}, []);


 



 

  return (
    <>
      <Mainheader />

      <div className="w-full h-full relative top-7 flex ">
        <div className="h-full mx-1 sm:w-8/12 w-full">

        <div className="sticky w-full bottom-0 h-7 flex  gap-4 flex-wrap bg-slate-50 pl-20 ">
         <GrAdd/>
          {categories?.map((category, index) => (
             <CatHeader category={category} key={index} />
          ))}
          
          </div>
           
          
          {allblogs?.map((blog, index) => (
            <SinglePost blog={blog} key={index} />
          ))}
        </div>

        <div className="h-full mx-1 sm:w-3/12 sticky top-0 hidden sm:block">
          <div className="font-serif text-sm font-semibold">Staff Picks</div>
        {featuredblogs?.map((blog, index) => (
            <FeaturedPost blog={blog} key={index} />
          ))}
          <Connect/>
          
          <div className="mt-6">Recommented Topics</div>

          {topics?.map((topic, index) => (
            <Recommented topic={topic} key={index} />
          ))}
          
          {writers?.map((writer, index) => (
            <Follow writer={writer} key={index} />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Userhome;
