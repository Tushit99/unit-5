import { useState } from "react";
import "./AddStudent.css" ;


export const AddStudent = () => {
  const [error , seterror] = useState(false)
  const [forData, setform] = useState({
      first_name: "" ,
      last_name: "" ,
      email: "" ,
      gender: "" ,
      age: 0 ,
      tenth_score: 0 ,
      twelth_score: 0 ,
      preferred_branch: 0 ,
  }); 
  const heandle = (el)=>{
    const {name ,value}= el.target ; 
    setform({
      ...formData , 
      [name]: value ,
    })
    // console.log(formData)  
  }

  async function postdata(formData){

    if(forData.age>=100 || forData.first_name =="" ||forData.twelth_score >= 100 ||forData.tenth_score >= 100){
      seterror(true) ; 
      return ; 
    }
    else{
    var data2 = await fetch("http://localhost:8080/students",{
      method: "POST" , 
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData) 
    })
  }
  }



  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={heandle}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name" 
          onChange={heandle}  
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"  
          onChange={heandle}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={heandle}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}  
            onChange={heandle}  
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age" 
          onChange={heandle}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score" 
          onChange={heandle}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={heandle}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={heandle}
        >
          <option value="law" onChange={heandle} >law</option>
          <option value="commerce" onChange={heandle} >commerce</option>
          <option value="science" onChange={heandle} >science</option>
          <option value="sports" onChange={heandle} >sports</option>
          <option value="arts" onChange={heandle} >arts</option>
          <option value="acting" onChange={heandle} >acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" onClick={()=>{postdata(formData)}}/>
      {
        <div className="error"> {error ? "fill this properly" : null } </div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
