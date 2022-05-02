import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data,setdata] =useState([])
  useEffect(()=>{
    const respons = axios.get("http://localhost:8080/users").
    then((respons)=>{
      setdata(respons.data)
    })
  },[])

  const [formdata , setFormdata] = useState({
    username : "",
    password : "",
});

  const handleChange = (e)=>{ 
    const {name} = e.target ;
  setFormdata({...formdata,
      [name] : e.target.value,
  })
  go()
 }

  function go(){
    data.map((e)=>{
      if(e.username === formdata.username && e.pass === formdata.password){
        if(e.role === "client"){
          navigate("/neworder")
        }
        if(e.role == "admin"){
          navigate("/orders")
        }
      }
    })
  }


  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleChange}>Login</button>
    </div>
  );
};