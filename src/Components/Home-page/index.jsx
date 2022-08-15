import React, {useState} from "react";
import Title from "../Title";
import Hide from "../Hide";


const AddForm = ()=>{
    const [value,usevalue] = useState('')
    const [value1,usevalue1] = useState('')



    const addChange = (e)=>{
        usevalue(e.target.value)
    }

    const addClick = ()=>{
        if(value.length<54) {
            usevalue1(value)
            usevalue('')
        }
        else{
            usevalue1(value)
        }
    }

    return <div>
        <div className="container">
            {console.log(value1)}
            <div className="main">
                {(value1.length<54 && value1.length!==0)? <Hide/> : null}
                <p>Task</p>
                <div className="form">
                    <input value={value} className={value1.length>54? "error-value" : null} onChange={addChange} type="search" placeholder="Write Here"/>
                    <button onClick={addClick}>Add</button>
                </div>
                {value1.length>54? <div className="error-length"><p>Task content can contain max 54 characters.</p></div> : null}
                <Title />
            </div>
        </div>
    </div>

}



export default AddForm