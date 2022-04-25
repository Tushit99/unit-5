import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [one, setone] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getdata() {
      var data = await fetch(`http://localhost:8080/employee/${id}`);
      var res = await data.json();
      setone(res);
    }
    getdata();
  }, []);

  return (
    <div className="user_details">
      <img className="user_image" />
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      one.status==="terminated" ? " " :{" "}
      <>
        <button className="fire btn">Fire Employee</button>{" "}
        <button className="promote btn">promote</button>{" "}
      </>

  </div>
  );
};
