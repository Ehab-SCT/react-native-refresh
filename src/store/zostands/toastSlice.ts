import {StateCreator} from 'zustand';
import {ToastSliceType} from '../../types/storeTypes';
import {delay} from '../../helpers/utils';

const toastInitValues = {
    visible: false,
    message: '',
    autoDismiss: 4000,
};

export const createToastSlice: StateCreator<ToastSliceType> = (set, get) => ({
    activeToast: toastInitValues,
    toastQueue: [],

    addToast: newToast => {
        if (get().activeToast.visible) {
            get().toastQueue.push({...toastInitValues, ...newToast, visible: true});
        } else {
            set(state => ({activeToast: {...toastInitValues, ...newToast, visible: true}}));
        }
    },

    editActiveToast: newToast => {
        set(state => ({
            activeToast: {
                ...toastInitValues,
                ...newToast,
                autoDismiss:
                    (state.activeToast.autoDismiss ?? 0) +
                    (newToast.autoDismiss ?? toastInitValues.autoDismiss),
                visible: true,
            },
        }));
    },

    hideActiveToast: () => {
        set(state => ({activeToast: toastInitValues}));
    },

    afterToastHidden: async () => {
        if (!get().activeToast.visible) {
            await delay(10);
            const nextToast = get().toastQueue.pop();

            if (nextToast)
                set(state => ({
                    activeToast: nextToast,
                }));
        }
    },
});
