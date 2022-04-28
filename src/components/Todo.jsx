import { TodoInput } from "./TodoInput"
import { useState } from "react"
import { TodoItem } from "./TodoItem"
import { nanoid } from "nanoid"

function Todo() {

    const [todosList, setTodosList] = useState([])

    const gateData = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        };
        setTodosList([...todosList, payload])
    }
    return <div>
        <TodoInput gateData={gateData} />
        <div className="TodoDiv">
            {todosList.map((e) => (<TodoItem todo={e}></TodoItem>))}
        </div>

    </div>
}

export { Todo }