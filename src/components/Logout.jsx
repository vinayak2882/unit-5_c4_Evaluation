import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../Redux/AuthRed/actions";
import { store } from "../Redux/store";

export const Logout = () => {
   // Logout component, just log user out and take him to `/` homepage

   // suggestion: if you are storing anyting in redux it's a good idea to
   // empty it before loggin out. eg: order
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
