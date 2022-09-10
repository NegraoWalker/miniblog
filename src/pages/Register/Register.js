import React from 'react'
import styles from "./Register.module.css"

import { useState, useEffect } from 'react'

const Register = () => {
    //*Criação dos Hooks:
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")


    //*Função para envio de dados:
    const handleSubmit = (event) => {
        event.preventDefault()

        setError("")
        const user = {
            displayName, email, password
        }

        //*Validações a partir do valores cadastrados:
        if (password != confirmPassword) {
            setError("As senhas precisam ser iguais!!")
            return
        }

        console.log(user)
    }



    return (
        <div className={styles.register}>
            <h1>Register user</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="displayName" required placeholder='Username' autoComplete='off' value={displayName} onChange={(event) => setDisplayName(event.target.value)} />
                </label>

                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder='User e-mail' autoComplete='off' value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>

                <label>
                    <span>Password:</span>
                    <input type="password" name="password" required placeholder='Enter password' value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>

                <label>
                    <span>Confirm password:</span>
                    <input type="password" name="confirmPassword" required placeholder='Confirm your password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                </label>

                <button type="submit" className='btn'>Register</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register