import  React, {useEffect,useState} from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Adminallpost from "./Adminpostrow";
import Admindashrow from "./Adminhomedashrow";
import { FiUsers } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import Adminuserow from "./Adminuserow";
import Admincategory from "./Admincategoryrow";
import Admincategoryrow from "./Admincategoryrow";
import Adminlogin from "./Adminlogin";
import useAdminauth from "../Costomhooks/adminauth";
import adminauth from "../features/auth/adminauth";
import { adminlogin ,adminLogout} from "../features/auth/adminauth";
import { useSelector, useDispatch } from 'react-redux'

function Admindash() {

  const { admin } = useSelector((state) => state.adminauth)
  const dispatch = useDispatch();

  const logout =()=>{
    localStorage.removeItem('admin')
    dispatch(adminLogout())
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const data = [
    {
      type: "allusers",
      logo: <FiUsers />,
      count: "20",
      link: "/allusers",
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

  // custom hook
   const Adminlogged = useAdminauth();
   useEffect(() => {
    Adminlogged()
   }, [admin])
   

  return (
    <div className="grid grid-cols-11 h-screen w-screen overflow-x-hidden">
      <div className="col-span-2 sticky top-0 h-screen">
        <div className="flex flex-col py-2">
          <div className="bg-white px-5 py-2 cursor-pointer flex">
          <Link to={'/admin'} >
              {" "}
              <div className="flex justify-center items-center space-x-2"><img className="h-6 w-6 " src="medium.png" alt=''/>
              <p>Medium Blogs</p></div>
            </Link>
          </div>
          <div className="bg-purple-800 h-screen flex flex-col   text-white">
            {data.map((item, index) => (
              <div key={index}>
                <Link to={`/admin/${item.type}`}>
                  <div className="flex p-4 space-x-2 hover:bg-purple-400 cursor-pointer ">
                    {" "}
                    <span className="flex items-center justify-center">
                      {item?.logo} &nbsp;{" "}
                    </span>{" "}
                    {item?.type}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-9 sticky">
        <div className="flex flex-col space-y-4  h-screen ">
          <div className="flex items-center justify-between p-4 shadow-xl">
            <div className="">
            <Link to={'/admin'} >
                <div className="flex items-center justify-between space-x-2">
                  <AiOutlineHome color="#FFA500" /> <span>Home</span>
                </div>
              </Link>
            </div>
            <div className="bg-orange-500 px-4 py-1 text-white rounded-sm">
              <Link>
                <button onClick={logout}>Logout</button>
              </Link>
            </div>
          </div>

           {/* <Adminuserow/> */}

         
           <Admindashrow/>


           {/* <Adminallpost/> */}


           {/* <Admincategoryrow/> */}


           {/* <Adminlogin/> */}

        </div>
      </div>
    </div>
  );
}

export default Admindash;
