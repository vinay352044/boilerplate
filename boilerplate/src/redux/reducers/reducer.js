const INIT_STATE = {
    isAuthenticated : false
};

export const authenticationReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            
            return {
                ...state,
                isAuthenticated:action.payload
            }
            case "LOGOUT" :
                 return {
                    ...state,
                    isAuthenticated:false
                 }
        default:
            return state;
    }
};
