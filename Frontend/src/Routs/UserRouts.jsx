import UserHome from "../Components/Userhome";
import BlogForm from "../Components/Adminaddpost";
import AdminDash from "../Components/Adminhomedash";
import AdminAllposts from "../Components/Adminpostdash";
import DetailedPost from "../Components/Detailedpost";
import UserloginForm from "../Components/Userloginform"
import HomeCategorywise from "../Components/Homecategorywise";
import AdminAllusers from '../Components/Adminuserdash'
import AdminAllcategory from '../Components/Admincatdash'
import AdminLogin from '../Components/Adminlogin'


 export const Admindash= {
    path: "/admin",
    element:<AdminDash/>,
  };

  export const Adminallpost= {
    path: "/admin/allposts",
    element:<AdminAllposts/>,
  };

  export const Adminlogin= {
    path: "/admin/login",
    element:<AdminLogin/>,
  };

  export const Adminallusers= {
    path: "/admin/allusers",
    element:<AdminAllusers/>,
  };

  export const Adminallcategory= {
    path: "/admin/allcategory",
    element:<AdminAllcategory/>,
  };

  export const Blogform= {
    path: "/addblog",
    element:<BlogForm/>,
  };

  export const Userhome= {
    path: "/",
    element:<UserHome/>,
  };

  export const Detailedpost= {
    path: "/detailedpost/:blogid",
    element:<DetailedPost/>,
  };

  export const UserRegisterform= {
    path: "/register",
    element:<UserloginForm/>
  };

  export const Categoryhome= {
    path: "/category/:categoryid",
    element:<HomeCategorywise/>,
  };