import React, {useEffect, useState} from "react";
import classes from './ModeForm.module.css'
import axios from "axios";

const ModeForm = ({onModeChangeHandler, onStartHandler, isStart}) => {
    const [modes, setModes] = useState([])
    const [size, setSize] = useState(0)

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://demo1030918.mockable.io/')
            await setModes(Object.entries(response.data));
        } catch (e) {
            console.log(e)
        }
    }

    const changeModeHandler = e => {
        setSize(+e.target.value)
        onModeChangeHandler(+e.target.value)
    }

    return (
        <form
            className={classes.ModeForm}>
            <select
                defaultValue={size}
                onChange={changeModeHandler}>
                <option value="0" defaultChecked>Pick Mode</option>
                {modes.map(([mode, {field: size}], index) => (
                    <option
                        key={index}
                        value={size}>
                        {mode}
                    </option>
                ))}
            </select>
            <button
                onClick={onStartHandler}
                type="button"
                className={classes.ModeForm__btn}
                disabled={size === 0 || isStart}>
                Start
            </button>
        </form>

    )
}

export default ModeForm

