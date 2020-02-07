import { routerRedux } from 'dva/router'
import { searchStudents, addStudent } from '../services/student'

export default {
    state: {
        condition: { //搜索条件
            search: "",
            sex: -1,
            page: 1,
            limit: 10
        },
        result: {
            total: 0, //总数据量
            datas: [] //学生数据
        }
    },
    subscriptions: {
        listenUrl({ history, dispatch }) {
            history.listen((newLocation) => {
                if (newLocation.pathname !== "/student") {
                    return;
                }
                const query = newLocation.query;
                // console.log(query)
                query.limit && (query.limit = +query.limit)
                query.page && (query.page = +query.page)
                query.sex && (query.sex = +query.sex)
                dispatch({
                    type: "changeCondition",
                    payload: query
                })
                dispatch({
                    type: "fetchStudents"
                })
            })
        }
    },
    reducers: {
        changeCondition(state, { payload }) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state, { payload }) {
            return {
                ...state,
                result: payload
            }
        },
        setAddResult(state, { payload }) {
            return {
                ...state,
                addResult: payload
            }
        }
    },
    effects: {
        *setCondition(action, { put, select }) {
            //改变地址
            let condition = yield select(state => state.student.condition)
            condition = {
                ...condition,
                ...action.payload
            }
            yield put(routerRedux.push(`?page=${condition.page}&limit=${condition.limit}&search=${condition.search}&sex=${condition.sex}`))
        },
        /**
         * 根据当前的条件，搜索学生
         * @param {*} action 
         * @param {*} param1 
         */
        *fetchStudents(action, { put, call, select }) {
            //拿到仓库中当前的搜索条件
            const condition = yield select(state => state.student.condition);
            const result = yield call(searchStudents, condition)
            yield put({
                type: "setResult",
                payload: {
                    total: result.cont,
                    datas: result.datas
                }
            })
        },
        /**
         * 添加一个学生信息
         * @param {*} action 
         * @param {*} param1 
         */
        *addStudent({ payload }, { call }) {
            const result = yield call(addStudent, payload)
            return result;
        }
    }
}