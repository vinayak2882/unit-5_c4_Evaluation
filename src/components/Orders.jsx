import { useState, useEffect } from "react";
import axios from "axios";

export const Orders = () => {
   //  Get all data when admin logs in and populate it
   // store it in redux

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
      // console.log(id);
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
                  {adminData.map((e) => {
                     return (
                        <tr className="orders-row">
                           <td className="id">{e.id}</td>
                           <td className="problem">{e.problem}</td>
                           <td className="owner">{e.owner}</td>
                           <td className="status">{e.status}</td>
                           <td className="cost">{e.cost}</td>
                           {e.status !== "Not Accepted" ? (
                              <td className="change-status">
                                 {/* Show select dropdown only if status is Not Accepted */}
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
                              {/* Show this button only if status is Not Accepted */}
                              {/* on change make request to update it in db, and show changed status in table */}
                              {e.status === "Not Accepted" ? (
                                 <button onClick={() => handleStatus(e.id)}>
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
