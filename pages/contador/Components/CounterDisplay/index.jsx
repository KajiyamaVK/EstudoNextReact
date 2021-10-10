import style from './stylesheet.module.css'

export default function CounterDisplay(props) {
    return (
        <>
            <div id={style.counter}>{props.number}</div>
        </>

    )
}