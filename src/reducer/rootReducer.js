import { combineReducers } from "redux";
import brandReducer from "./BrandReducer";
import chocolateReducer from "./ChocolateReducer";
import signupReducer from "../reducer/SignupReducer";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  brandReducer,
  chocolateReducer,
  signupReducer,
  loginReducer,
  searchReducer
});

export default rootReducer;
