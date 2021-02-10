import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {  

    const inputRef = useRef()

    const handleClick =()=> {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    
    return (
        <div>
            <h1>Focus Screen!</h1>

              <input 
                type="text"
                ref = {inputRef}
                className="form-control"
                name="" 
                id="" 
                aria-describedby="helpId" 
                placeholder="" 
                />

                <button 
                type="button" 
                className="btn btn-outline-primary mt-5"
                onClick = {handleClick}
                >
                    
                    Focus
                </button>
           
        </div>
    )
}
