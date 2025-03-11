import { useState, useEffect } from "react"
import Modal from "../../components/modal/Modal";

function AboutPage() {
    
    const [modal, setModal] = useState(false)
    
    function handleModal() {
        setModal(!modal)
    }

    // useEffect(() => {
    //     console.log('modal');
        
    // }, [modal])
return (
    <div>
        <h2>useEffect</h2>
        <button onClick={handleModal}>modal</button>
        {
            modal === true ? <Modal/> : ""
        }
    </div>
)
}

export default AboutPage