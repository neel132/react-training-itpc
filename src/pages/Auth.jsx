import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Auth = () => {
  //  We are hardcoding the userLogin,
  //  in prod it can be access token, etc
  const [isUserLoggedIn, setUser] = useState(null);
  
  // useNavigate is used to navigate to other pages
  // programmatically
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!isUserLoggedIn) {
      if(location.state && location.state.login && location.state.login === true) {
        setUser(true);
      }
    }
  }, [location])
  // useEffect runs in last once component is loaded
  useEffect(() => {
    if(isUserLoggedIn == true) { // your logic
      location.pathname === '/' && navigate('/home');
    } else if(isUserLoggedIn == false) {
      navigate('/login');
    }
  }, [isUserLoggedIn]);
  // array dependencies is been used to re-render - 
  // useEffect and component

  console.log("isUserLoggedIn =>", isUserLoggedIn);
  if(isUserLoggedIn) {
  // Outlet is a key which gives access to the children path
    return <Outlet />
  }
  return null;
}
export default Auth;