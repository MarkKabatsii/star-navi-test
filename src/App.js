import React, {useState} from "react";
import TableWrapper from "./containers/TableWrapper/TableWrapper";

import classes from './App.module.css';
import HoverList from "./containers/HoverList/HoverList";

function App() {
    const [field, setField]= useState([])
    const hoverListHandler = value => {
        setField(value)
    }

    return (
        <div className={classes.App}>
            <div className={classes.App__container}>
                <TableWrapper onHoverList={hoverListHandler}/>
                <HoverList field={field}/>
            </div>
        </div>
    );
}

export default App;
