import React from "react";
import { Button } from "./Button"
import {Input} from "./Input";

export const Searcher = ({title, value,inputLabel, buttonLabel, style, onChange, onClick}) =>{
    return(
        <div className="sercher-container">
            <p className="searcher-title">{title}</p>
            <div className="searcher-input">
                <Input 
                placeholder={inputLabel}
                value={value} 
                onChange={onChange}
                />
            </div>
    
            <Button
                label={buttonLabel}
                onClick={onClick}
                style={style}
            />
        </div>
    );
}