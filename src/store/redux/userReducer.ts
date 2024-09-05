
const initialState ={
    isLogin: false,
    username: "Ehab",
}

export default (state = initialState, { type, payload} ) => {

switch(type){
    case "LOGIN":
        return {...state, isLogin: payload.isLogin, username: payload.username}
    // case "LOGOUT":
    //     return {...state, isLogin: payload}
    // case "CHANGE_NAME":
    //     return {...state, username: payload}
    default:
            return state;
}


}