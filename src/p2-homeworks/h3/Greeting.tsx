import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: string) => void
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
            <SuperInputText error={error} onChangeText={setNameCallback}/>

            {/*<button onClick={addUser}>add</button>*/}
            <SuperButton onClick={addUser} red={error}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
