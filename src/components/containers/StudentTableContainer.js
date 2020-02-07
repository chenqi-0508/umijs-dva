import { connect } from 'dva'
import StudentTable from '../StudentTable'

const mapStateToProps = state => {
    return {
        stu: state.student.result,
        isLoading: state.loading.effects["student/fetchStudents"],
        page: state.student.condition.page,
        limit: state.student.condition.limit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPageChange(newPage) {
            dispatch({
                type: 'student/setCondition',
                payload: {
                    page: newPage
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);