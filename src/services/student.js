import qs from 'querystring'

const appkey = 'demo13_1545210570249';
// const appkey = '13815447996_1547882450130';

/**
 * 按页查询学生信息
 * @param {*} page
 * @param {*} limit
 */
export async function getStudentInfo(page, limit) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data)
}

/**
 * 获取所有学生信息
 */
export async function getAllStudents() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data)
}

/**
 * 按关键字查询学生信息
 * @param {*} param0
 */
export async function searchStudents(
    { page = 1, limit = 10, search = "", sex = -1 }) {

    if (search) {//有关键字，按关键字查询学生信息
        let respData = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&sex=${sex}&search=${search}`)
            .then(resp => resp.json()).then(resp => resp.data);
        respData.datas = respData.searchList;
        delete respData.searchList;
        return respData;
    } else {//没有关键字，按页查询学生信息
        let respData = await getStudentInfo(page, limit);
        respData.datas = respData.findByPage;
        delete respData.findByPage;
        return respData;
    }
}

/**
 * 添加一个学生的信息
 * @param {*} param0 
 */
export async function addStudent(
    { sNo, name, sex, birth, phone, address, email }) {
    const query = qs.stringify({ sNo, name, sex, birth, phone, address, email })
    return await fetch(`/api/student/addStudent?appkey=${appkey}&${query}`)
        .then(resp => resp.json())
}

/**
 * 修改一个学生信息
 * @param {*} param0 
 */
export async function updateStudent(
    { sNo, name, sex, birth, phone, address, email }) {
    const query = qs.stringify({ sNo, name, sex, birth, phone, address, email })
    return await fetch(`/api/student/updateStudent?appkey=${appkey}&${query}`)
        .then(resp => resp.json())
}

/**
 * 根据学号获取学生信息
 * @param {*} sNo 
 */
export async function queryStudentBySNo(sNo) {
    const respData = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${1}&size=${100}&sex=${-1}&search=${sNo}`)
        .then(resp => resp.json()).then(resp => resp.data);
    const stuInfo = respData.searchList.find(item => {
        return item.sNo = sNo
    })
    return stuInfo;
}

