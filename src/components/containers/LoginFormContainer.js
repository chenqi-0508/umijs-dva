import LoginForm from '../LoginForm'
import { connect } from 'dva'

const mapDispatchToProps = dispatch => {
    return {
        async loginHandle(loginInfo) {
            return await dispatch({
                type: 'loginUser/loginCheck',
                payload: loginInfo
            })
        },
        onSetLoginUser(account) {
            dispatch({
                type: 'loginUser/setLoginUser',
                payload: account
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
