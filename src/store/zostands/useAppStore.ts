import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { AppStoreType } from "../../types/storeTypes";

import { createKeyboardSlice } from "./keyboardSlice";
import { createLoadingSlice } from "./loadingSlice";
import { createToastSlice } from "./toastSlice";

export const useAppStore = create<AppStoreType, [["zustand/immer", never]]>(
  immer((...a) => ({
    ...createKeyboardSlice(...a),
    ...createLoadingSlice(...a),
    ...createToastSlice(...a),
  }))
);
