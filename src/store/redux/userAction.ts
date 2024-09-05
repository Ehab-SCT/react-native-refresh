export const loginAction = (username: string) => {
    return {
        type: "LOGIN",
        payload: {
            isLogin: true,
            username
        },
    }
}


export const logoutAction = () => {
    return {
        type: "LOGOUT",
        payload: false,
    }
}


export const changeUsernameAction = (username: string) => {
    return {
        type: "CHANGE_NAME",
        payload: username,
    }
}





