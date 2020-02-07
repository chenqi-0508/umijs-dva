import React, { Component } from 'react'
import RegisterFromContainer from '../components/containers/RegisterFromContainer'
import style from './register.css'

export default class register extends Component {
    render() {
        return (
            <div className={style.wrapperRegister}>
                <RegisterFromContainer />
            </div>
        )
    }
}
