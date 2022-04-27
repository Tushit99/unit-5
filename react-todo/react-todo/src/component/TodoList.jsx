import { TodoItem } from "./TodoItem"

const ToDoList = (props) => {
    var x=props.data.filter((e)=>{
        return e.status===false
    })
    return (
        <ul className="todo-list">
            {x.map((e) => {
                return <TodoItem data={e} toggle={props.toggle} />
            })}
        </ul>
    )
}

export { ToDoList }