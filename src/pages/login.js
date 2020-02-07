import React from 'react'
import LoginFormContainer from '@/components/containers/LoginFormContainer'
import style from './login.css'

export default function login() {
    return (
        <div className={style.wrapperLogin}>
            <LoginFormContainer/>
        </div>
    )
}
