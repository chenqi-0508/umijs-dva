import React, { Component } from 'react'
import AddStudentFormContainer from '../../components/containers/AddStudentFormContainer'
import { queryStudentBySNo, updateStudent } from '../../services/student'

export default class $id extends Component {

    state = {
        stuInfo: {},
        isLoading: false
    }

    async componentDidMount() {
        this.setState({isLoading: true});
        const stuInfo = await queryStudentBySNo(this.props.match.params.id)
        this.setState({
            stuInfo,
            isLoading: false
        })
    }

    async onUpdateHandle(stuInfo) {
        return await updateStudent(stuInfo);
    }

    render() {
        return (
            <div style={{margin: "20px 20px"}}>
                <AddStudentFormContainer stuInfo={this.state.stuInfo} isLoading={this.state.isLoading} onUpdateHandle={this.onUpdateHandle}/>
            </div>
        )
    }
}