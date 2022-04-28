export const TodoItem = ({ todo }) => {
    return (
        <div>
            
            <div id="Todotitle">
                {todo.title}
            </div>

            <button id="togglebtn">Toggle</button>
        </div>
    )
}