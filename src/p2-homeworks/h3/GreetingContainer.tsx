import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {log} from "util";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string)=>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (newName: string) => {
       setError(null)
        setName(newName)
    }



    const addUser = () => {
        if (name.trim()!=="") {
        alert(`Hello ${name}  !`) // need to fix
        addUserCallback(name)
        setName("")}
        else {setError("Поле не может быть пустым")}
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
