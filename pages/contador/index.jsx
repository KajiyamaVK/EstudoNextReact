
import { useState } from 'react'
import style from './stylesheet.module.css'
import CounterDisplay from './Components/CounterDisplay'

export default function ContadorApp() {

    const [number, setnumber] = useState(0)

    function addOperation() {
        setnumber(number + 1);
        console.log('PK');
    }

    function subOperation() {
        setnumber(number - 1);
    }

    return (
        <div id={style.main}>
            <div id={style.buttonsContainer}>
                <button className={style.btn} onClick={addOperation}> + </button>
                <button className={style.btn} onClick={subOperation}> - </button>

            </div>
            <div>
                <CounterDisplay number={number} />
            </div>
        </div >


    )

}