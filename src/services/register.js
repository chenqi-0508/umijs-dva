import qs from 'querystring'

// const appkey = 'demo13_1545210570249';
const appkey = '13815447996_1547882450130';

/**
 * 学生管理系统的注册 
 * POST请求
 * @param {*} param0 
 */
export async function stuRegister(registerInfo) {
    let obj = {
        appkey,
        ...registerInfo
    }
    const data = qs.stringify(obj);
    const opts = {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    return await fetch(`/api/student/stuRegister`, opts)
        .then(resp => resp.json())
}

/**
 * 学生管理系统的登录
 * @param {*} param0 
 */
export async function stuLogin(loginInfo) {
    const data = qs.stringify({
        appkey,
        ...loginInfo
    })
    const opts = {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    return await fetch(`/api/student/stuLogin`, opts)
        .then(resp => resp.json())
}


