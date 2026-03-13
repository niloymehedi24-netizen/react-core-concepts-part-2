import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(3)
    }

    const counterStyle = {
        border: '2px solid green'
    }

    return(
        <div style={counterStyle}>
            <h2>count: {count} </h2>
            <br />
            <button onClick={handleAdd}>Add</button>
        </div>
    )

}

    


    