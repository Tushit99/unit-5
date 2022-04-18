import { useEffect, useState} from "react";


export const ShowStudents = () => {
  const [studentData , setstudentData] = useState([]); 
  useEffect(()=>{
    async function getData(){
      var data = await fetch("http://localhost:8080/students") 
      var res = await data.json(); 
      setstudentData(res) ; 
    }
    getData ;
  },[])


  return (
    <div>
      <div className="controls">
        <div>
          Sort By : {" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>

          Order :
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {studentData.map((el)=>{
            return <tr className="row">
            <td className="first_name"> {el.first_name} </td>
            <td className="last_name"> {el.last_name} </td>
            <td className="email"> {el.email} </td>
            <td className="gender"> {el.gender} </td>
            <td className="age"> {el.age} </td>
            <td className="tenth_score"> {el.tenth_score} </td>
            <td className="twelth_score"> {el.twelth_score} </td>
            <td className="preferred_branch"> {el.preferred_branch} </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
