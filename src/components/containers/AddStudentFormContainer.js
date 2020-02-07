import { connect } from 'dva'
import AddStudentForm from '../AddStudentForm'

const mapStateToProps = state => {
    return {
        isLoading: state.loading.effects["student/addStudent"] || state.loading.global
    }
}

const mapDispatchToProps = dispatch => {
    return {
        async onAddHandle(stuInfo) {
            const resp = await dispatch({
                type: 'student/addStudent',
                payload: stuInfo
            })
            return resp;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);