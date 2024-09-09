import {FC} from 'react';
import {ColorValue, StatusBarStyle} from 'react-native';

type ToastType = {visible: boolean; message: string; autoDismiss: number};
type DialogType = {visible: boolean; title: string; height: number; content: FC<any>};
type ActionSheetType = {visible: boolean; title: string; options: any[]};

export type StatusBarOptionsType = {
    backgroundColor: ColorValue | undefined;
    barStyle: StatusBarStyle;
};

export type AuthSliceType = {
    isLoggedIn: boolean;
    setLoggedIn: () => void;
    setLoggedOut: (navigation: any) => void;
};

export type UserSliceType = {
    isAdmin: boolean;
    toggleIsAdmin: () => void;
};

export type LoadingSliceType = {
    isAppLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
};

export type ToastSliceType = {
    activeToast: ToastType;
    toastQueue: ToastType[];
    addToast: (newVal: Partial<ToastType>) => void;
    editActiveToast: (newVal: Partial<ToastType>) => void;
    hideActiveToast: () => void;
    afterToastHidden: () => void;
};

export type DialogSliceType = {
    activeDialog: DialogType;
    openDialog: (newVal: Partial<DialogType>) => void;
    openDialogDelayed: (newVal: Partial<DialogType>) => void;
    hideDialog: () => void;
};

export type ActionSliceType = {
    activeActionSheet: ActionSheetType;
    openActionSheet: (newVal: Partial<ActionSheetType>) => void;
    hideActionSheet: () => void;
};

export type KeyboardSliceType = {
    isKeyboardOpen: boolean;
    setIsKeyboardOpen: (newVal: boolean) => void;
};

export type InternetSliceType = {
    isInternetReachable: boolean;
    setIsInternetReachable: (newVal: boolean) => void;
};

export type StatusBarSliceType = {
    statusBarOptions: StatusBarOptionsType;
    setStatusBarOptions: (newVal: StatusBarOptionsType) => void;
    resetStatusBarOptions: () => void;
};

export type AppStoreType = AuthSliceType &
    UserSliceType &
    LoadingSliceType &
    ToastSliceType &
    DialogSliceType &
    ActionSliceType &
    KeyboardSliceType &
    InternetSliceType &
    StatusBarSliceType;
