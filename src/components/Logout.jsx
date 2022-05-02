import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../Redux/AuthRed/actions";
import { store } from "../Redux/store";

export const Logout = () => {
 
   const dispatch = useDispatch();
   useSelector((store) => {
      console.log(store);
      return store.username;
   });

   dispatch(logout("logout"));

   return (
      <>
         <Navigate to="/" />
      </>
   );
};
