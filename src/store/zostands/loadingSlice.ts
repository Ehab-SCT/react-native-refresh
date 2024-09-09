import {StateCreator} from 'zustand';
import {LoadingSliceType} from '../../types/storeTypes';

export const createLoadingSlice: StateCreator<LoadingSliceType> = set => ({
    isAppLoading: false,
    showLoading: () => set(state => ({isAppLoading: true})),
    hideLoading: () => set(state => ({isAppLoading: false})),
});
