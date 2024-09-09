import {StateCreator} from 'zustand';
import {KeyboardSliceType} from '../../types/storeTypes';

export const createKeyboardSlice: StateCreator<KeyboardSliceType> = set => ({
    isKeyboardOpen: false,
    setIsKeyboardOpen: newVal => set(state => ({isKeyboardOpen: newVal})),
});
