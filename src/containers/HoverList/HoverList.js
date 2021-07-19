import React from "react";
import HoverItem from "../../components/HoverItem/HoverItem";

import classes from "./HoverList.module.css";

const HoverList = ({field}) => {
    return (
        <ul className={classes.HoverList}>
            <h2 className={classes.HoverList__title}>Hover squares</h2>
            {field.map((row, rowIndex) => row.map((col, colIndex) => col && (
                <HoverItem
                    key={rowIndex + colIndex}
                    row={rowIndex + 1}
                    col={colIndex + 1}
                />)))
            }
        </ul>
    )
}

export default HoverList;