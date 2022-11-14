import React from 'react'


import './display.scss'
import { useState } from 'react'

function Display() {
    const [result, setResult] = useState("");

    const ops = [
        '+',
        '-',
        '*',
        '/',
    ]

    const digits = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        '.',
    ];

    const clickDigts = (e) => {
        e.preventDefault();
        setResult(result.concat(e.target.name))
    }

    const clickOps = (e) => {
        e.preventDefault();
        setResult(result.concat(e.target.name))
    }

    const delnput = (e) => {
        e.preventDefault();
        setResult("")
    }

    const showResult = (e) =>{
        e.preventDefault();
        setResult(eval(result).toString())
    }

    return (
        <form className='display'>
            <input type="text" value={result} className='displayInput' />
            <button name='del' onClick={delnput} className='del'>Del</button>
            {ops.map((value, index) => (<button name={value} onClick={clickOps} className='ops'>{value}</button>))}
            {digits.map((value, index) => (<button name={value} onClick={clickDigts} className='digits'>{value}</button>))}
            <button name='=' onClick={showResult} className='digits'>=</button>
        </form>
    )
}

export default Display;