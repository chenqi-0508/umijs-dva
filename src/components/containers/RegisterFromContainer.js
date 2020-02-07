import { connect } from 'dva'
import RegisterForm from '../RegisterForm'

const mapDispatchToProps = dispatch => {
    return {
        async onRegisterSubmit(registerInfo) {
            return await dispatch({
                type: 'loginUser/registerUser',
                payload: registerInfo
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm);