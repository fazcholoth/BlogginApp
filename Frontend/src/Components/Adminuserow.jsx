import React, { useState, useEffect } from "react";
import axios from "axios";

function Adminusertable() {
  const [users, setusers] = useState([]);
  const [updatedusers, setupdatedusers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      const response = await axios.get("http://localhost:8000/getusers");

      const usersdata = response.data;
      setusers(usersdata);
    };

    fetchusers();
  }, [updatedusers]);


  const handleblockuser = async(userid)=>{
    const updateduser = await axios.post(
      `http://localhost:8000/admin/blockuser/${userid}`,
    );
    setupdatedusers(updateduser)

  }


  const handleunblockuser = async(userid)=>{
    const updateduser = await axios.post(
      `http://localhost:8000/admin/unblockuser/${userid}`,
    );
    setupdatedusers(updateduser)

  }

  return (
    <div className="grid-cols-1 justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-slate-300">
                <td className="px-6 py-4">
                  <img className="h-6 w-6 " src={user?.image} alt="" />
                </td>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </th>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">
                  {user.blocked?(<button onClick={()=>{handleunblockuser(user._id)}} className=" text-xs my-0 bg-blue-800 text-white rounded-xl px-2 py-1">
                    Unblock
                  </button>):(<button onClick={()=>{handleblockuser(user._id)}}  className=" text-xs my-0 bg-red-500 text-white rounded-xl px-2 py-1">
                    Block
                  </button>)}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminusertable;
