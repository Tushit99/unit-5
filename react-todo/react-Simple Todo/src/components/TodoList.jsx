import { TodoItem } from "./TodoItem"

const ToDoList = (props) => {
    return (
        <ul className="todo-list">
            {props.data.map((e) => {
                return <TodoItem data={e} toggle={props.toggle} />
            })}
        </ul>
    )
}

export { ToDoList }