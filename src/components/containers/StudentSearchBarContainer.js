import StudentSearchBar from '../StudentSearchBar'
import { connect } from 'dva'

const mapStateToProps = state => {
    return {
        search: state.student.condition.search,
        sex: state.student.condition.sex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch(newCondition) {
            newCondition.page = 1;
            dispatch({
                type: "student/setCondition",
                payload: newCondition
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);