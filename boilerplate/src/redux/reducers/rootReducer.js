import { combineReducers } from "redux";
import { roleReducer } from "./roleReducer";
import { productReducer } from "./productReducer";
import {appReducer} from "./appReducer"

const rootReducer = combineReducers({
    app: appReducer,
    role:roleReducer,
    product:productReducer,
})
export default rootReducer