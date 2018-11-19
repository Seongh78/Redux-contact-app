/** --------------------
 * contact action
 * ---------------------
 * 
 */

export const SELECT = 'SELECT';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';
export const FAVORITE = 'FAVORITE';
export const ALL = 'ALL';

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
export const create = (value) => {
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
export const update = id => {
    return { 
        type: UPDATE,
        id: id
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