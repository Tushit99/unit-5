import { useState } from "react"
import { ToDoList } from "./TodoList"
import {nanoid} from "nanoid";
import "./Todo.css"
import { Deletedata } from "./Deletedata";

const Todo = () => {
    const [TodoData, setTodoData] = useState([]);
    const [deletedata,setdata] = useState([]);
    const getData = (id) => {
        const data = document.getElementById(id).value;
        document.getElementById(id).value = "";
        setTodoData([...TodoData,
            {
                title: data,
                status: false,
                id: nanoid(5)
            }
        ]);
    }
    const deldata = (data)=>{
        let D=data.filter((e)=>{
            return e.status===true
        })
        
        setdata(D);
    }
    const toggle = (id) => {
        setTodoData([
            ...TodoData.map((e) => {
                return (e.id === id ? {...e, status: !e.status} : e)
            })
        ])
    }

    return (
        <>
            
            <div id="input-div">
                <input id="user-input" type="text" placeholder="Write Something"></input>
                <button  onClick={() => {getData("user-input")}} id="plus">+</button>
            </div>
            <ToDoList data={TodoData} toggle={toggle}/>
            <button className="btn" onClick={()=>{deldata(TodoData)}}>Show Deleted Todos</button>
            <Deletedata data={deletedata}/>
        </>
    )
}

export { Todo }