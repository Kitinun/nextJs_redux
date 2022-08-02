import {combineReducers} from 'redux'
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
    counter: counterReducer //เรียกใช้ redux ที่ชื่อว่า counterReducer
})

export default rootReducer;