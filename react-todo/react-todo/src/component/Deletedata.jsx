const Deletedata = (data) => {
    return (
        <ul className="todo-list">
            {data.data.map((e) => {
                return <li className="todo-item todo-done">{e.title}</li>
            })}
        </ul>
    )
}

export { Deletedata } 