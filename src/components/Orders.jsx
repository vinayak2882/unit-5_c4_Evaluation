import { useState, useEffect } from "react";
import axios from "axios";

export const Orders = () => {

   const [adminData, setAdminData] = useState([]);

   const getAdminData = async () => {
      let data = await fetch("http://localhost:8080/orders");
      data = await data.json();
      setAdminData([...data]);
   };

   useEffect(() => {
      getAdminData();
   }, [setAdminData]);

   const handleStatus = (id) => {
      let cost = prompt("Enter cost");
      axios
         .patch(`http://localhost:8080/orders/${id}`, {
            status: "Pending",
            cost: cost,
         })
         .then(getAdminData());
   };

   return (
      <div>
         <div>
            <div>
               <select className="controls" name="progress" id="progress">
                  <option value="id">ID</option>
                  <option value="status">Status</option>
                  <option value="cost">Cost</option>
               </select>
            </div>
            <table className="orders">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Problem</th>
                     <th>Client Name</th>
                     <th>Status</th>
                     <th>Cost</th>
                     <th>Change Status</th>
                     <th>Accept</th>
                  </tr>
               </thead>
               <tbody>
                  {adminData.map((ele) => {
                     return (
                        <tr className="orders-row">
                           <td className="id">{ele.id}</td>
                           <td className="problem">{ele.problem}</td>
                           <td className="owner">{ele.owner}</td>
                           <td className="status">{ele.status}</td>
                           <td className="cost">{ele.cost}</td>
                           {ele.status !== "Not Accepted" ? (
                              <td className="change-status">
                                 <select
                                    className="changeStatus"
                                    name="changeStatus"
                                 >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">
                                       In Progress
                                    </option>
                                    <option value="Done">Done</option>
                                    <option value="Not Accepted">
                                       Not Accepted
                                    </option>
                                 </select>
                              </td>
                           ) : (
                              "-"
                           )}
                           <td className="accept">
                                 {ele.status === "Not Accepted" ? (
                                 <button onClick={() => handleStatus(ele.id)}>
                                    Accept
                                 </button>
                              ) : null}
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};
