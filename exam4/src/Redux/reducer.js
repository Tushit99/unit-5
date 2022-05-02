import { LOGIN } from "./actions";
const init = {
  auth : false ,

};

export const authReducer = (store = init, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...store,
                auth: true,
            };
        default:
            return store;
    }
}