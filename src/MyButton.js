import React from 'react';
import { calcSum,calcDiff } from './Util';


export default function MyButton(props) {

    const { 
        backgroundColor, 
        color,
        margin, 
        padding,
        handleClick, 
        children
    } = props;
    

    return (
    <div 
        style={{
            // @TODO
            // make the text inside the button centered
            // give the button a 1px blue border
            backgroundColor: backgroundColor, 
            color: color,
            margin: margin,
            padding: padding,
            borderRadius: "7px"
        }}
        onClick={() => handleClick()}
        >
           {children}
    </div>
    )
}