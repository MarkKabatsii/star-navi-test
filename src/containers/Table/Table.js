import React from "react";
import TableItems from "../../components/TableItems/TableItems";

import classes from './Table.module.css'

const Table = ({onHoverFieldHandler, field, isActive}) => {
let attachedClasses = [classes.Table, '']
    if(!isActive){
        attachedClasses = [classes.Table, classes.Table__default]
    }

    return (
        <table className={attachedClasses.join(' ')}>
            <tbody>
            {field.map((row, rowIndex) => <tr key={rowIndex}>
                {row.map((paintedHandler, colIndex) =>
                    <TableItems
                        key={rowIndex + colIndex}
                        row={rowIndex}
                        col={colIndex}
                        onPaintedHandler={paintedHandler}
                        onHoverField={onHoverFieldHandler}
                    />
                )}
            </tr>)
            }
            </tbody>
        </table>
    );
}

export default Table;