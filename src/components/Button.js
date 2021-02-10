import React from "react";
import "../assets/styles.scss"

export const Button = ({label, style, onClick})=>{
    return(
        <div className={["button-container", style].join(" ")} onClick={onClick}>
             <label>{label}</label>
        </div>
    )
}