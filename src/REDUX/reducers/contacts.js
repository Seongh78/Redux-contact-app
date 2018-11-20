/** --------------------
 * Reducer
 * ---------------------
 * reducers/index.js
 */
import * as types from '../actions/contacts';
import sampleData from '../../sampleData.json'

// 기본값 설정
const initialState = sampleData;


const contacts = (state = initialState, action) => {
    switch(action.type) {
        // 검색
        case types.SELECT:
            return state.filter(item=>item.id === action.id)[0];
        
        // 생성
        case types.CREATE:
            let input = action.value;
            input.id = state[state.length-1].id + 1; // id생성
            const newState = state.concat(input)
            
            return newState;
        
        // 수정
        case types.UPDATE:
            const rid = state.findIndex(s => s.id === action.id);
            // 배열 치환 [1,2,3,4,5] => [1,2] + [3] + [4,5]
            const data = state.slice(0,rid).concat(action.value).concat(state.slice(rid+1));
            
            return data;
        
        // 삭제
        case types.REMOVE:
            if( window.confirm("삭제하시겠습니까?") )
                return state.filter(item => item.id !== action.id);

            return state;
        
        // 즐겨찾기
        case types.FAVORITE:
            const fid = state.findIndex(s => s.id === action.id);
            state[fid].favorite = !state[fid].favorite;
            
            return [...state];

        // 전체검색
        default:
            return state;
    }
};


export default contacts;
