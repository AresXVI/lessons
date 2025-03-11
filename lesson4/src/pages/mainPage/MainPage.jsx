import { useState } from "react"

function MainPage() {
    const [state, setState] = useState(0)
    function click() {
        setState(prevState => prevState + 1)
        console.log(state);
    }
    return (
    <div>
        <h2>{state}</h2>
        <button onClick={click}>click</button>
    </div>
    )
}

export default MainPage