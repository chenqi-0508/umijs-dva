import React from 'react'
import StudentSearchBarContainer from '../../components/containers/StudentSearchBarContainer'
import StudentTableContainer from '../../components/containers/StudentTableContainer'

export default function index() {
    return (
        <div>
            <StudentSearchBarContainer/>
            <StudentTableContainer/>
        </div>
    )
}
