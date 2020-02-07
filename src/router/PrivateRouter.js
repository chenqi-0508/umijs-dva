import { connect } from 'dva'
import { routerRedux } from 'dva/router'

function PrivateRouter(props) {
    //已经登录或登录页面
    if (props.isLogin || props.location.pathname === '/login' || props.location.pathname === '/register') {
        return props.children
    }
    props.isNotLogin && props.isNotLogin();
    return null
}

const mapStateToProps = state => {
    return {
        isLogin: state.loginUser ? true : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isNotLogin() {
            console.log("没有权限登录")
            dispatch(routerRedux.push('/login'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
