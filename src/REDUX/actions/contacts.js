/** --------------------
 * contact action
 * ---------------------
 * 
 */

export const SELECT = 'SELECT'; // 단일조회
export const CREATE = 'CREATE'; // 생성
export const UPDATE = 'UPDATE'; // 수정
export const REMOVE = 'REMOVE'; // 삭제
export const FAVORITE = 'FAVORITE'; // 즐겨찾기 토글
export const ALL = 'ALL'; // 전체조회

// import sampleData from '../sampleData.json'

/**
 * 연락처 선택
 * 
 * @param {*} id 
 */
export const select = id => {
    return {
        type: SELECT,
        id: id
    }
}

/**
 * 연락처 생성
 * 
 * 
 */
export const create = value => {
    return { 
        type: CREATE,
        value
    }
}

/**
 * 연락처 수정
 * 
 * @param {*} id 
 */
export const update = (id, value) => {
    return { 
        type: UPDATE,
        id,
        value
    }
}

/**
 * 연락처 삭제
 * 
 * @param {*} id 
 */
export const remove = id => {
    return { 
        type: REMOVE,
        id: id
    }
}

/**
 * 즐겨찾기
 * 
 * @param {*} id 
 */
export const favorite = id => {
    return { 
        type: FAVORITE,
        id: id
    }
}

/**
 * ALL
 * 
 * 
 */
export const all = () => {
    return { 
        type: ALL
    }
}