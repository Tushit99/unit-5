// import "./button.css" 
import styled from "styled-components";

// export const Button = ({children , onClick}) => {
//     return <button onClick={onClick} className = "but"> {children}</button>
// }




const Button = styled.button`
    color : #000000 ; 
    border: 2px solid blue;
    margin: 5px; 
    background-color: ${(pro)=>{props.theme === "light" ? "#3b7fc4r54" : "#ec0d0d"}}; 
    color: pink ; 

    &:hover{
        width: 100px ;
    }
`;

export {Button} ;

