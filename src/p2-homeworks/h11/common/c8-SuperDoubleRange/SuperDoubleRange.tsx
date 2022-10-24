import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange =(e: Event, newValue:number | number[])=> {

        onChangeRange &&onChangeRange(newValue)

    }

    let valuetext = 4
    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                disableSwap={false}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={5}

                // getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
