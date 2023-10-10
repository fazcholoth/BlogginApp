import React, { useEffect, useState } from "react";
import Mainheader from "./Mainheader";
import SinglePost from "./Userpostrow";
import axios from "axios";
import FeaturedPost from "./Featured";
import Connect from "./Connect";
import Recommented from "./Recommented";
import Follow from "./Follow";
import { useParams } from 'react-router-dom';
import CatHeader from "./CatHeader";


function Category() {
  const [allblogs, setallblogs] = useState([]);
  const [featuredblogs, setfeaturedblogs] = useState([]);
  const [topics, settopics] = useState([]);
  const [writers, setwriters] = useState([]);
  const { categoryid } = useParams();
  const [categories, setcategories] = useState([]);

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
     const response = await axios.get(`http://localhost:8000/getcategoryblogs/${categoryid}`);
     console.log(response.data);
     const blogs = response.data;
     setallblogs(blogs);
   };

   fetchblogs();
 }, [categoryid]);



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
        <div className="h-full mx-1 w-8/12">
          
        <div className="sticky w-full top-0 h-7 flex bg-slate-50 justify-start gap-4 pl-10">

          {categories?.map((category, index) => (
             <CatHeader category={category} key={index} />
          ))}
          
          </div>

          {allblogs?.map((blog, index) => (
            <SinglePost blog={blog} key={index} />
          ))}
        </div>

        <div className="h-full mx-1 w-3/12 sticky top-0">
        {featuredblogs?.map((blog, index) => (
            <FeaturedPost blog={blog} key={index} />
          ))}
          <Connect/>

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

export default Category
