import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
 export const EmployeeList = () => {
  const [data , setdata] = useState ([]);

  useEffect(()=>{
    async function getdata(){
      var data = await fetch("http://localhost:8080/employee")
      var res = await data.json();
      setdata(res)
    }
    getdata()
    
  },[]);
  return (
  <div className="list_container" >
    {data.map((e)=>{
      return <Link to={`/employees/${e.id}`}>
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
        <img className="employee_image" alt="img" src={e.image}/>
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
      
      </Link>
    })}
    
    </div>
  );
};