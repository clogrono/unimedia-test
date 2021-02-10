import React from "react";
import "../assets/styles.scss";

export const Input = ({placeholder,value,onChange})=>{
    return(
        <input 
        className="input-content"
        type="text" 
        placeholder={placeholder}
        value={value} 
        onChange={onChange}
        />
    )
}