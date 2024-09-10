import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedUserRoute = ({ children }) => {
    const { userInfo } = useSelector(state => state.auth);
    const verified = localStorage.getItem('verified');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo && !verified) {
            navigate('/login');
        }else if(userInfo && userInfo.user.authorities[0].authority !== "User" && !verified){
            navigate('/login');
        }else if(userInfo && userInfo.user.authorities[0].authority === "User" && !verified){
            navigate('/login');
        }
    }, [userInfo, navigate]);

    if (!userInfo) {
        // Optionally render null or a loading spinner while redirecting
        return null;
    }

    return children;
};

export default ProtectedUserRoute;
