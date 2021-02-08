import React, { useEffect, useState } from 'react'
import './effects.css'
export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const {name, email} = formState;
    useEffect(() =>{
        
    })

    return (
        <>
           <h1>useEffect</h1> 
           <hr></hr>

           <div class="form-group">
             <label for=""></label>
             <input 
                type="text"
                name="" 
                id="" 
                class="form-control" 
                placeholder="" 
                aria-describedby="helpId"
                />

             <small id="helpId" class="text-muted">Help text</small>
           </div>
        </>
    )
}
