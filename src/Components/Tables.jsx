import React from "react";
import "../index.css";



const Table = ({ users }) => {
console.log(users);
  
  return (
    <div className=" flex flex-wrap mb-20">
      {users.map((user) => (
        
        <section
        
          key={user.id}
          className="h-[auto] w-[100%]  bg-[#f0ff69] rounded-md shadow-sm "
        >
          <table className=" outline w-[40rem] h-auto">
        <thead>
          <tr>
            <th key={user.id} name={user.firstname} className="firstname">{user.firstname}</th>
            
          </tr>
        </thead>

          </table>
          
        </section>
      ))}
    </div>
  );
};

export default Table;