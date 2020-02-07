import { stuLogin, stuRegister } from '../services/register'
export default {
    state: null,
    reducers: {
        setLoginUser(state, { payload }) {
            return payload
        },
        logout(state, { payload }) {
            localStorage.removeItem("loginId");
            return null
        }
    },
    effects: {
        //注册账户
        *registerUser({ payload }, { call }) {
            return yield call(stuRegister, payload)
        },
        
        //校验登录信息
        *loginCheck({ payload }, { call }) {
            return yield call(stuLogin, payload)
        }
    },
    subscriptions: {
        getUserName({ dispatch }) {
            const account = localStorage.getItem("loginId");
            if (account) {
                dispatch({ type: 'setLoginUser', payload: account });
            }
        }
    }
}