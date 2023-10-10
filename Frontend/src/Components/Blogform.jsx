import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Image from "@editorjs/image";
import axios from "axios";
import Input from "./Input";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";



const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

const EditorComponent = () => {
  const [editorInstance, setEditorInstance] = useState(null);
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate();

  const [heading, setheading] = useState("");
  const [topic, settopic] = useState("");
  const [file, setfile] = useState("");
  const [time, settime] = useState("");




  useEffect(() => {
    if (!user) {
      navigate('/register');
    }
  }, [user])

  const handleSave = async () => {
    if (editorInstance) {
      const data = await editorInstance.save();

      

      const formData = new FormData();

      formData.append("image", file);

      const imgresponse = await axios.post(
        "http://localhost:8000/admin/uploadmainimg",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: false,
        }
      );

      const blogData = {
        creator: user.name,
        heading: heading,
        readTime: time,
        content: data,
        image: imgresponse?.data?.image,
        creatorimg:user.image,
        topic:topic
      };

      const blogresponse = await axios.post(
        "http://localhost:8000/admin/uploadBlog",
        blogData
      );

      // editorInstance.render(DEFAULT_INITIAL_DATA);

      console.log(blogresponse.data);
      navigate('/')

      
    } else {
      console.error("Editor instance is not available");
    }
  };

  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      // data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
      tools: {
        header: Header,
        paragraph: Paragraph,
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("file", file);
                const response = await axios.post(
                  "http://localhost:8000/admin/uploadFile",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                    withCredentials: false,
                  }
                );

                if (response.data.success === 1) {
                  return response.data;
                }
              },
            },
          },
        },
      },
    });
    setEditorInstance(editor);
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto mt-20">
        <div className="flex justify-center mb-4">
          <h3 className="font-bold text-xl">Add Blog Datas Here</h3>
        </div>

        {/* <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
          </label>
          <input
            type="text"
            name="createrName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
          />
        </div> */}

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Main Heading
          </label>
          <input
            type="text"
            name="mainHeader"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Main Header"
            value={heading}
            onChange={(e) => {
              setheading(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
             Topic
          </label>
          <input
            type="text"
            name="mainHeader"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Topic"
            value={topic}
            onChange={(e) => {
              settopic(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Main Image
          </label>
          <input
            type="file"
            name="mainImage"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Choose Image"
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Reading Time
          </label>
          <input
            type="number"
            name="mainImage"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reaind time"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="-z-50" id="editorjs"></div>
      <div className="flex justify-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-auto"
          onClick={handleSave}
        >
          Save Blog Post
        </button>
      </div>
    </>
  );
};

export default EditorComponent;
