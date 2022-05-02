import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const NewOrder = () => {
  
   const store = useSelector((store) => store);
   const [data, setData] = useState([]);

   const getOrders = () => {
      axios
         .get(`http://localhost:8080/orders?owner_name=${store.username}`)
         .then((fetche) => {
         
            setData(fetche.data);
         });
   };

   useEffect(() => {
      getOrders();
   }, []);

   
   return (
      <div>
         <div className="form">
            <input
               className="new-problem"
               type="text"
               name="problem"
               placeholder="Enter problem"
            />
            <input
               className="owner-name"
               type="text"
               name="owner_name"
               placeholder="yourname"
               value={store.username}
               readOnly
            />
            <input
               className="brand"
               type="text"
               name="brand"
               placeholder="Enter brand name"
            />
       
            <button className="submit">submit</button>
         </div>

         <div className="pastOrders">
         
            <button className="filter">
              
            </button>

            {data.map((ele) => {
               return (
                  <div className="past-orders">
                     <span className="id">{ele.id}</span>.{" "}
                     <span className="problem">{ele.problem}</span>{" "}
                     <span className="cost">
                     
                     </span>
                     <p className="status">Status: {ele.status}</p>
                     <hr />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
