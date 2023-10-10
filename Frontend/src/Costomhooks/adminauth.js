import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function useAdminauth() {
    const { admin } = useSelector((state) => state.adminauth)
    const navigate = useNavigate()

    const isAminlogged = () => {
        if (!admin) {
            navigate('/admin/login')
        }
    }

    return isAminlogged; 
}

export default useAdminauth;
