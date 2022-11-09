import { useRef } from 'react';
import './Contact.css'

const Contact = () => {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    
    const handleClick = (e) => {
        e.preventDefault()
        
        inputRef1.current.value = "";
        inputRef2.current.value = "";
        inputRef3.current.value = "";
    }

    return (
        <div className="contact" id="contact">
            <form>
                <div>
                    <p>Contact</p>
                </div>
                <input type="text" placeholder="Name" ref={inputRef1} />
                <input type="email" placeholder="Email" ref={inputRef2} />
                <textarea name="message" rows="10" placeholder="Message" ref={inputRef3}></textarea>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;
