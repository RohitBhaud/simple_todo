import { useState } from 'react'

const TodoInput = ({ gateData }) => {
    const [text, setText] = useState("")

    return <div>
        <input className='TodoInput'
            onChange={(e) => {
                setText(e.target.value)
            }}
            type="text"
            placeholder="Enter todo" />
        <button className='Todobtn' onClick={() => { gateData(text) }}>Add Todo</button>

    </div>
}

export { TodoInput }