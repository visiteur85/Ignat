import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:string)=>void
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={(e)=>setNameCallback(e.currentTarget.value)} className={error ? inputClass : ""}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
