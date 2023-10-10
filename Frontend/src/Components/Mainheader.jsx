import React ,{useState}from 'react'
import { FiSearch } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import {PiNotePencilDuotone } from 'react-icons/pi';
import { useNavigate,Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { register,userLogout } from "../features/auth/authSlice";


 

function Mainheader() {

  
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)

  
  const dispatch = useDispatch();
  const userlogout =()=>{
    localStorage.removeItem('user')
    dispatch(userLogout())
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleclick = ()=>{
   
    if (user) {
      navigate("/addblog");
    } else {
      navigate("/register");
    }
    
  }

  

  
  return (
    <div className="flex w-full justify-between h-11 px-3 items-center">
     <div className="flex justify-center gap-2 items-center">
      <img className="h-12 w-12 " src="https://cdn.icon-icons.com/icons2/3922/PNG/512/medium_icon_250136.png" alt=''/>
      <div className="search relative">
      <input
        type="text"
        className="search pl-8 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring w-58 h-6"
        placeholder="Search Medium..."
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
    </div>
    </div>

      <div className="h-4 flex items-center justify-around gap-3 relative">
        <div className="flex items-center justify-center gap-1">
        <div onClick={handleclick}><PiNotePencilDuotone className="text-gray-400" /></div>
        <div><p className="text-neutral-400">Write</p></div>
        </div>
        <div> <BsBell className="text-gray-400" /></div>
        <div><img onClick={toggleDropdown} className="h-6 w-6 rounded-full" src={user?.image} alt=''/></div>
        {isOpen&&user&&(<div onClick={userlogout} className="absolute right-2 top-5 bg-blue-500 px-2 ">Logout</div> )}
        {isOpen&&!user&&(<Link to={'/register'} ><div className="absolute right-2 top-5 bg-blue-500 px-2 ">Login</div> </Link>)}
      </div>

    </div>
  )
}

export default Mainheader