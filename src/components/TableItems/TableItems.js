import React from 'react';
import classes from './TableItems.module.css'

const TableItems = ({onHoverField, row, col, onPaintedHandler}) => {
    let attachedClasses = [classes.TableItems, '']
    if(onPaintedHandler){
        attachedClasses = [classes.TableItems, classes.TableItems__painted]
    }
    return (
        <td
            className={attachedClasses.join(' ')}
            onMouseOver={() => onHoverField(row, col)}>
        </td>
    )
}

export default TableItems;