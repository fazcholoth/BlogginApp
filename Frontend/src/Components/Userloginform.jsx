import React ,{useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";


function Loginform() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState("");
  const { user } = useSelector((state) => state.auth)
  const [email, setemail] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);


    dispatch(register(formData));

    
   
  };


  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user])
  

  return (
    <div className="w-full h-full flex items-center justify-center mt-2">
      <div className="shadow-lg w-4/6 bg-slate-200">
        <div className="flex justify-center pt-3"><h1 className="text-2xl">Register Now</h1></div>
        <div className="flex justify-center py-2">
        <div className="w-3/4 ">
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
        </div>
        </div>

        <div className="flex justify-center py-2">
        <div className="w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            name="createrName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
        </div>
        </div>

        <div className="flex justify-center py-2">
        <div className="w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pass Word
          </label>
          <input
            type="password"
            name="createrName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
        </div>
        </div>

        <div className="flex justify-center py-4">
        <div className="w-3/4 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Photo
          </label>
          <input
            type="file"
            name="createrName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
            required
          />
        </div>
        </div>
        <div className="flex justify-center pb-2">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-auto"
          onClick={onSubmit}
        >
          Register
        </button>
      </div>
      </div>
      <div></div>
    </div>
  );
}

export default Loginform;
