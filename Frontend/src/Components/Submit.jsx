const BlogContent = ({ editorData }) => {
    return (
      <div>
        {editorData.blocks.map((block, index) => {
          switch (block.type) {
            case 'header':
              return <h1 key={index}>{block.data.text}</h1>;
            case 'paragraph':
              return <p key={index}>{block.data.text}</p>;
            // Handle other block types as needed
            default:
              return null;
          }
        })}
      </div>
    );
  };
  
  export default BlogContent;



  function getFirstParagraph(editorData) {
    const firstParagraph = editorData.blocks.find(block => block.type === "paragraph");
    if (firstParagraph) {
      return firstParagraph.data.text;
    }
    return ""; // Return an empty string if there are no paragraphs in the data
  }
  
  const firstParagraphText = getFirstParagraph(editorData);
  console.log(firstParagraphText); // Output: "This is the first paragraph."


  import React from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const blogPosts = [
    { id: 1, title: 'Blog Post 1' },
    { id: 2, title: 'Blog Post 2' },
    // Add more blog posts...
  ];

  return (
    <div>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





import React, { useEffect, useState } from 'react';
import Mainheader from './Mainheader';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailedpost() {
  const { blogid } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log(blogid);

    const fetchBlog = async () => {
      try {
        const blogResponse = await axios.get(`http://localhost:8000/getblog/${blogid}`);
        const fetchedBlog = blogResponse.data;
        setBlog(fetchedBlog);
        console.log(fetchedBlog);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBlog();
  }, [blogid]);

  return (
    <>
      <Mainheader />
      <div className="mt-10">{blog?.creator}</div>
    </>
  );
}




