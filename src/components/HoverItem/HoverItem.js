import React from "react";
import classes from './HoverItem.module.css'

const HoverList = ({row, col}) => {
    return <li className={classes.HoverItem}><span>row:</span><span>{row}</span> <span>col:</span><span>{col}</span></li>
}
export default HoverList;