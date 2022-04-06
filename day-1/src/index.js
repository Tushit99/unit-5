
import { sum , mult } from "./calc"  ;   

console.log(sum(1,4)) ;  

console.log(mult(2,5)) ; 


document.querySelector("#box").addEventListener("click", fun)

function fun(){  
    // e.preventdefault   
    let h2 = document.querySelector("#h") ;
    // h2.innerHTML ="" ;
    h2.innerText = "Welcome to Masai" ;

    document.querySelector("#h").append(h2) ;  
}

