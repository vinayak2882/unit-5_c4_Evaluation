import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthRed/actions";
import { store } from "../Redux/store";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   useSelector((store) => {
    
      return store.username;
   });
   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });

   const handleChange = (ele) => {
      setFormData({ ...formData, [ele.target.name]: ele.target.value });
   };

   const handleSubmit = (ele) => {
      ele.preventDefault();
      axios.get("http://localhost:8080/users").then((data) => {
   
         data.data.map((ele) => {
            
            if (
               ele.username === formData.username &&
               ele.pass === formData.password
            ) {
               dispatch(login(ele));
               if(ele.role === 'admin'){

                 navigate("/orders")
               } else{
                 navigate("/neworder")
               }
            }
         });
         
      });
   };

   return (
      <div>
         <input
            onChange={handleChange}
            className="username"
            type="text"
            name="username"
            placeholder="Enter Username"
         />
         <input
            onChange={handleChange}
            className="password"
            type="password"
            name="password"
            placeholder="Enter password"
         />
         <button className="submit" onClick={handleSubmit}>
            Login
         </button>
      </div>
   );
};
