import { useNavigate } from "react-router-dom"


export const About = () => {
    const navigate = useNavigate();

  return (
    <div>
      About Us:
      <p>We are the Best</p>
      <p>Thanks !</p>
      <button onClick={()=>{
        navigate("/product/Refrigerator")
      }}>
          Submit</button>
    </div>
  )
}
