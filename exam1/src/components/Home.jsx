import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";

export const Home = () => {

  const {total} = useContext(UserContext);   
  const [data , setdata] = useState ([]);     

  useEffect(()=>{
    async function getdata(){
      var data = await fetch("http://localhost:8080/employee")
      var res = await data.json();
      setdata(res)
    }
    getdata()
    
  },[]);
  
  console.log(total)

  return (
    <div>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span className="start">Stats</span>
        <div className="data">
          Total Employees : <span className="totalemp">{data.length}</span>
        </div>
        <div className="data">
          Total Terminated : <span className="total_terminated">{total.terminated}</span>
        </div>
        <div className="data">
          Total Promoted : <span className="total_promoted">{total.promoted}</span>
        </div>
        <div className="data">
          Total New : <span className="total_new">{total.total_new}</span>
        </div>
      </div>
    </div>
  );
};