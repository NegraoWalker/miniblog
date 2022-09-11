//*Importando as configurações do firebase:
// import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'


import { useState, useEffect } from 'react'


export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    //*Função que envia os users cadastrados para o banco de dados do firebase:
    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName,
            })
            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres!"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já cadastrado!"
            } else {
                systemErrorMessage = "Ocorreu um erro!"
            }

            setError(systemErrorMessage)
        }
        setLoading(false)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return (
        auth,
        createUser,
        error,
        loading
    )
}