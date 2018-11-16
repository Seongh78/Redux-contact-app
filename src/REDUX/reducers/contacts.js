/** --------------------
 * Reducer
 * ---------------------
 * reducers/index.js
 */
import * as types from '../actions/contacts';
import { combineReducers } from 'redux';
import sampleData from '../../sampleData.json'


const initialState = sampleData;
// const initialState = {
//     "id"        : null,
//     "name"      : "",
//     "phone"     : "",
//     "favorite"  : false,
//     "img"       : "",
//     "belong"    : ""
// };
console.log("Reducers : ",initialState);


const contacts = (state = initialState, action) => {
    switch(action.type) {
        // 검색
        case types.SELECT:
            return state.filter(item=>item.id === action.id)[0];
        
        // 생성
        case types.CREATE:
            return state;
        
        // 수정
        case types.UPDATE:
            return state;
        
        // 삭제
        case types.REMOVE:
            if( window.confirm("삭제하시겠습니까?") )
                return state.filter(item => item.id !== action.id);
            return state;
        
        // 즐겨찾기
        case types.FAVORITE:
            const fid = state.findIndex(s => s.id === action.id);
            state[fid].favorite = !state[fid].favorite;
            
            // return state;
            return [...state];

        // 전체검색
        default:
            return state;
    }
};




const contactApp = combineReducers({
    contacts
});

export default contactApp;
