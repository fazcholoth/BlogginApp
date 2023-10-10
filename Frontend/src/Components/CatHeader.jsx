import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";



function CatHeader({category}) {

    const [categoryid, setcategoryid] = useState("");
    const navigate = useNavigate();






    const handleCategory = () => {
 
        console.log(categoryid);
        
        navigate(`/category/${category.name}`);
       
      }



  return (
    
      <div className="text-gray-600 font-thin text-xs"
        onClick={() => {setcategoryid(category.name)
          handleCategory();
        }}
      >
        <p>{category.name}</p>
      </div>
    
  );
}

export default CatHeader;
