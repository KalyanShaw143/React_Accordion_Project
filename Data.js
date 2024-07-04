import React, {useState} from "react";
import "./App.css";
import {  FcExpand, FcCollapse } from "react-icons/fc";


const Data = ({title, body}) =>{

    const [show, setshow] = useState(false);

    const handleClick = ()=>{
        setshow(!show);
    }

    return(
        <div className={show ? "accordion-open accordion-item" : "accordion-item"} onClick={handleClick}>
            <div className="accordion-title">
            <h5>{title}</h5>
            <p>{show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}</p>
            </div>
            
            <div>
                {show && <p>{body}</p>}
            </div>
        </div>
    )
}

export default Data