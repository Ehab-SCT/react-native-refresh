import { APIGet, APIPost } from "../serviceTask";

export const ENDPOINT_GET_USERS: string =
    "users";
export const ENDPOINT_GET_USER_BY_ID: string =
    "user/{id}";
    
export const ENDPOINT_POST_CREATE_USER: string =
    "user";

export const getUsers = async (
    callbackSuccess: any,
    callbackError: any
): Promise<any> => {
    await APIGet(ENDPOINT_GET_USERS).then((response: any) => {
        if (response.error) {
            if (callbackError) {
                callbackError(response.error);
            }
        } else {
            if (callbackSuccess) {
                callbackSuccess(response);
            }
        }
    });
};

export const getChallengeById = async (
    id: string | number,
    callbackSuccess: any,
    callbackError: any
): Promise<any> => {
    await APIGet(ENDPOINT_GET_USER_BY_ID.replace('{id}', id as string)).then((response: any) => {
        if (response.error) {
            if (callbackError) {
                callbackError(response.error);
            }
        } else {
            if (callbackSuccess) {
                callbackSuccess(response);
            }
        }
    });
};



export const postCreateUser = async (
    payload: any,
    callbackSuccess: any,
    callbackError: any
): Promise<any> => {
    await APIPost(ENDPOINT_POST_CREATE_USER, payload).then((response: any) => {
        if (response.error) {
            if (callbackError) {
                callbackError(response.error);
            }
        } else {
            if (callbackSuccess) {
                callbackSuccess(response);
            }
        }
    });
};



