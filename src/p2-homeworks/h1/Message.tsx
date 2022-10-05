import React from 'react'
import s from '../h1/Message.module.css'

type PropsType = {
    avatar:string
    name: string,
    message: string
    time: string
}
 export function Message(props:PropsType) {
    return (
        <div className={s.container}>
            <img className={s.img} src={props.avatar} alt="avatar"/>
            <div className={s.message}>
                <p>{props.name}</p>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>


        </div>
    )
}


