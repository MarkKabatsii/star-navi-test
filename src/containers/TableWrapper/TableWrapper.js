import React, {useEffect, useState} from "react";

import ModeForm from "../ModeForm/ModeForm";
import Table from "../Table/Table";

import classes from './TableWrapper.module.css'

const TableWrapper = ({onHoverList}) => {
    const createMatrix = (n, value = false) => {
        return Array.from({length: n}, () => new Array(n).fill(value));
    }

    const [select, setSelect] = useState(0)
    const [control, setControl] = useState(false)
    const [field, setField] = useState(createMatrix(select))

    const modeChangeHandler = (size) => {
        if (size >= 5) {
            setSelect(size)
            setField(createMatrix(size))
        } else {
            setField(createMatrix(select))
        }
        setControl(false)
    }

    const hoverFieldHandler = (rows, cols) => {
        setField(field.map((row, rowIndex) => row.map((col, colIndex) => (
                rowIndex === rows && colIndex === cols ? !col : col
            )
        )))
    }

    useEffect(() => {
        onHoverList(field)
    }, [field, onHoverList])

    return (
        <div className={classes.TableWrapper}>
            <ModeForm
                onStart={() => setControl(true)}
                onModeChangeHandler={modeChangeHandler}
                onStartHandler={() => setControl(true)}
                isStart={control}
            />
            <Table
                isActive={control}
                field={field}
                onHoverFieldHandler={hoverFieldHandler}
            />
        </div>
    )
}

export default TableWrapper;