import { connect } from 'dva'
import Header from '../Header'
import { routerRedux } from 'dva/router'
import router from 'umi/router'

const mapStateToProps = state => {
    return {
        userName: state.loginUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout() {
            dispatch({type: 'loginUser/logout'})
            dispatch(routerRedux.push('/login'));
        },
        onLogin() {
            // dispatch(routerRedux.push('/login'));
            router.push('/login');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);