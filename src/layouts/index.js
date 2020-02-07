/**
 * Routes:
 *  - ./src/router/PrivateRouter
 */
import React from 'react'
import Layout from '@/components/Layout'
import HeaderContainer from '@/components/containers/HeaderContainer'
import Aside from '@/components/Aside'


export default function index(props) {
    if (props.location.pathname === '/login' || props.location.pathname === '/register') {
        return props.children
    } else {
        return (
            <Layout
                header={<HeaderContainer />}
                aside={<Aside />}
                container={props.children}
            />

        )
    }
}
