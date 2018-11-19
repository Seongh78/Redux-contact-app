/** --------------------
 * Reducer
 * ---------------------
 * reducers/index.js
 */
import * as types from '../actions/contacts';
import sampleData from '../../sampleData.json'


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


export default contacts;
