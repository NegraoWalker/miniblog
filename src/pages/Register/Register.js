import React from 'react'
import styles from "./Register.module.css"

import { useState, useEffect } from 'react'

const Register = () => {
    return (
        <div className={styles.register}>
            <h1>Register user</h1>
            <form>
                <label>
                    <span>Name:</span>
                    <input type="text" name="displayName" required placeholder='Username' />
                </label>

                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder='User e-mail' />
                </label>

                <label>
                    <span>Password:</span>
                    <input type="password" name="password" required placeholder='Enter password' />
                </label>

                <label>
                    <span>Confirm password:</span>
                    <input type="password" name="confirmPassword" required placeholder='Confirm your password' />
                </label>

                <button type="submit" className='btn'>Register</button>
            </form>
        </div>
    )
}

export default Register