import { useEffect } from "react"

function Modal() {

    useEffect(() => {
        console.log("монтирование");
        return () => {
            console.log("размонтирование");
        }
    }, [])

    return (
        <div>
            <h2>I am modal component</h2>
        </div>
    )
}

export default Modal